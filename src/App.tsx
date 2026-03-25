import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { EnergyPreloader } from './components/EnergyPreloader';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {!isReady && <EnergyPreloader onComplete={() => setIsReady(true)} />}

      <div className={isReady ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        <ThemeToggle />
        <Navigation />
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
