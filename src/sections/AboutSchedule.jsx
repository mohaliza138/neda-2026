import { SCHEDULE, EVENT } from '../data/content';
import './AboutSchedule.css';

function classifyEntry(item) {
  if (!item.start || !item.end) return { active: false, muted: false };
  const now = Date.now();
  const start = new Date(item.start).getTime();
  const end   = new Date(item.end).getTime();
  return {
    active: now >= start && now <= end,
    muted:  now > end,
  };
}

export default function AboutSchedule() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="two-col">

          {/* About */}
          <div>
            <p className="section-eyebrow">About</p>
            <p className="about__body">
              NEDA is an online event for anyone who wants their first real look at
              Electronic Design Automation. Two days of workshops introduce different areas of EDA,
              followed by a seven-day competition where you solve simplified real-world EDA problems.
            </p>
            <p className="about__body" style={{ marginTop: 10 }}>
              No EDA background required. A basic digital design background helps you get the most out of it,
              but is not mandatory. No special tools needed either. Plain Python gets the job done.
            </p>
          </div>

          {/* Schedule */}
          <div id="schedule" className="sched__anchor">
            <p className="section-eyebrow">Schedule</p>
            <div className="card" style={{ padding: '12px 16px' }}>
              {SCHEDULE.map((item, i) => {
                const { active, muted } = classifyEntry(item);
                return (
                  <div key={i} className={`sched__row${muted ? ' sched__row--muted' : ''}${active ? ' sched__row--active' : ''}`}>
                    <span className="sched__time">{item.time}</span>
                    <span className="sched__label">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <p className="about__date"> {EVENT.date}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
