import { useState } from 'react';
import { FAQS } from '../data/content';
import './FAQ.css';

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq__item ${open ? 'faq__item--open' : ''}`}>
      <button className="faq__q" onClick={() => setOpen(v => !v)}>
        <span>{item.q}</span>
        <span className="faq__chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="faq__a">{item.a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="page-section" id="faq">
      <div className="container">
        <p className="section-eyebrow">FAQ</p>
        <div className="faq__list">
          {FAQS.map((item, i) => (
            <FAQItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
