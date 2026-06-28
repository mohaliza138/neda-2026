import { EVENT } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <div className="footer__logo">
            <div className="footer__mark">N</div>
            <span className="footer__name">{EVENT.name} {EVENT.year}</span>
          </div>
          <p className="footer__copy">Organized by former DSD students :)</p>
        </div>

        <div className="footer__links">
          {EVENT.discordUrl && <a href={EVENT.discordUrl} target="_blank" rel="noreferrer">Discord</a>}
          {EVENT.githubUrl  && <a href={EVENT.githubUrl}  target="_blank" rel="noreferrer">GitHub</a>}
          {EVENT.portalUrl  && <a href={EVENT.portalUrl}  target="_blank" rel="noreferrer">Event portal</a>}
        </div>
      </div>
    </footer>
  );
}
