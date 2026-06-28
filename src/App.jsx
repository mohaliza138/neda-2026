import { useState, useEffect } from 'react';
import Navbar        from './components/Navbar';
import Footer        from './components/Footer';
import Hero          from './sections/Hero';
import AboutSchedule from './sections/AboutSchedule';
import Resources     from './sections/Resources';
import Updates       from './sections/Updates';
import HallOfFame    from './sections/HallOfFame';
import AboutUs       from './sections/AboutUs';
import FAQ           from './sections/FAQ';
import './index.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('neda-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('neda-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="page">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* push content below fixed navbar */}
      <div style={{ paddingTop: 56 }}>
        <Hero />
        <AboutSchedule />
        <Resources />
        <Updates />
        <HallOfFame />
        <AboutUs />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
