import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })),
);
const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage').then((module) => ({
    default: module.ProjectDetailPage,
  })),
);
const PortfolioPage = lazy(() =>
  import('./pages/PortfolioPage').then((module) => ({
    default: module.PortfolioPage,
  })),
);

function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[40vh] items-center justify-center text-sm text-gray-500"
    >
      Loading…
    </div>
  );
}

function App() {
  return (
    <Layout>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage startSection="home" />} />
          <Route path="/portfolio" element={<HomePage startSection="portfolio" />} />
          <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage startSection="about" />} />
          <Route path="/contact" element={<AboutPage startSection="contact" />} />
          <Route path="/work" element={<PortfolioPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
