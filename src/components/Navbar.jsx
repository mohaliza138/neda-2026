import { useState, useEffect } from 'react';
import { EVENT, UPDATES, HALL_OF_FAME } from '../data/content';
import './Navbar.css';

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About',        href: '#about'    },
    { label: 'Schedule',     href: '#schedule' },
    { label: 'Resources',    href: '#resources'},
    UPDATES.length      > 0 && { label: 'Updates',      href: '#updates' },
    HALL_OF_FAME.length > 0 && { label: 'Hall of fame', href: '#hof'     },
    { label: 'Team',         href: '#team'     },
    { label: 'FAQ',          href: '#faq'      },
  ].filter(Boolean);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          <div className="navbar__mark">N</div>
          <span className="navbar__name">{EVENT.name}</span>
          <span className="navbar__year">{EVENT.year}</span>
        </a>

        {/* Desktop links */}
        <div className="navbar__links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar__link">{l.label}</a>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          {EVENT.portalUrl && (
            <a href={EVENT.portalUrl} className="navbar__cta" target="_blank" rel="noreferrer">
              Event portal →
            </a>
          )}
          <button
            className="navbar__theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="navbar__burger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          {EVENT.portalUrl && (
            <a href={EVENT.portalUrl} className="navbar__mobile-cta" target="_blank" rel="noreferrer">
              Event portal →
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
