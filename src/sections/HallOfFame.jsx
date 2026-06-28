import { HALL_OF_FAME } from '../data/content';
import './HallOfFame.css';

export default function HallOfFame() {
  if (HALL_OF_FAME.length === 0) return null;

  return (
    <section className="page-section" id="hof">
      <div className="container">
        <div className="hof__header">
          <div>
            <p className="section-eyebrow">Hall of fame</p>
          </div>
        </div>

        <div className="three-col">
          {HALL_OF_FAME.map(winner => (
            <div
              key={winner.rank}
              className={`hof__card ${winner.rank === 1 ? 'hof__card--gold' : ''}`}
            >
              <div className="hof__medal">{winner.medal}</div>
              <p className="hof__rank-label">{winner.rank === 1 ? '1st' : winner.rank === 2 ? '2nd' : '3rd'} place</p>
              <p className="hof__name">{winner.name}</p>
              <p className="hof__meta">{winner.score} pts · {winner.type}</p>
              {winner.notebookUrl && (
                <a href={winner.notebookUrl} className="hof__nb" target="_blank" rel="noreferrer">
                  View notebook →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
