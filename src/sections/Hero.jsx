import { EVENT } from '../data/content';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container">
        <div className="hero__pill">
          <span className="hero__dot" />
          NEDA · {EVENT.year} · For DSD students
        </div>

        <h1 className="hero__title">{EVENT.tagline}</h1>

        <p className="hero__sub">{EVENT.description}</p>

        <div className="hero__btns">
          {EVENT.portalUrl && (
            <a href={EVENT.portalUrl} className="btn-primary" target="_blank" rel="noreferrer">
              Register on the portal →
            </a>
          )}
          <a href="#about" className="btn-ghost">
            Learn more
          </a>
        </div>

        <div className="hero__tags">
          <span className="tag tag-orange">Beginner friendly</span>
          <span className="tag tag-green">Solo &amp; teams</span>
          <span className="tag tag-cyan">Free</span>
          <span className="tag tag-purple">Online</span>
        </div>
      </div>
    </section>
  );
}
