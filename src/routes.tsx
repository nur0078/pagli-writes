import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, AboutPage, GalleryPage, GhazalsPage, Poems } from './components';

const BlogRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/ghazals" element={<GhazalsPage />} />
        <Route path="/poems" element={<Poems />} />
      </Routes>
    </Router>
  );
};

export default BlogRoutes;
