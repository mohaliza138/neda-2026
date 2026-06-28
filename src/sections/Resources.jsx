import { WORKSHOPS } from '../data/content';
import './Resources.css';

export default function Resources() {
  return (
    <section className="page-section" id="resources">
      <div className="container">
        <div className="res__header">
          <div>
            <p className="section-eyebrow">Workshop resources</p>

          </div>
        </div>

        <div className="two-col">
          {WORKSHOPS.map(ws => (
            <div key={ws.id} className="card res__card">
              <div className="res__card-head">
                <p className="res__card-title">{ws.title}</p>
                {ws.status === 'available' && <span className="tag tag-cyan" style={{ fontSize: 10 }}>Available</span>}
                {ws.status === 'soon'      && <span className="tag tag-orange" style={{ fontSize: 10 }}>Coming soon</span>}
                {ws.status === 'locked'    && <span className="tag tag-gray" style={{ fontSize: 10 }}>After event</span>}
              </div>

              {ws.resources.map((r, i) => (
                <div key={i} className="res__row">
                  <span className="res__icon">{r.icon}</span>
                  <span className="res__label">{r.label}</span>
                  {r.url
                    ? <a href={r.url} className="res__link" target="_blank" rel="noreferrer">{r.type}</a>
                    : <span className="res__link res__link--pending">{r.type}</span>
                  }
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
