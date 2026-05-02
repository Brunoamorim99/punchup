import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage startSection="home" />} />
        <Route path="/portfolio" element={<HomePage startSection="portfolio" />} />
        <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
        <Route path="/about" element={<AboutPage startSection="about" />} />
        <Route path="/contact" element={<AboutPage startSection="contact" />} />
        <Route path="/work" element={<PortfolioPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
