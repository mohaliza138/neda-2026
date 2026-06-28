import { UPDATES, EVENT } from '../data/content';
import './Updates.css';

export default function Updates() {
  if (UPDATES.length === 0) return null;

  return (
    <section className="page-section" id="updates">
      <div className="container">
        <div className="upd__header">
          <div>
            <p className="section-eyebrow">Updates</p>
            <p className="upd__hint">Mirrored from the event portal</p>
          </div>
          {EVENT.portalUrl && (
            <a href={EVENT.portalUrl} className="upd__portal-link" target="_blank" rel="noreferrer">
              View all on portal →
            </a>
          )}
        </div>

        <div className="card" style={{ padding: '4px 20px' }}>
          {UPDATES.map(u => (
            <div key={u.id} className="upd__row">
              <div className="upd__dot-col">
                <div className={`upd__dot ${u.fresh ? 'upd__dot--fresh' : ''}`} />
              </div>
              <div className="upd__content">
                <p className="upd__time">{u.time}</p>
                <p className="upd__text">{u.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
