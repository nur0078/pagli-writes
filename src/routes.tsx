import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, AboutPage, GalleryPage, GhazalsPage, Poems } from './components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const BlogRoutes = () => {
  return (
    <div className="flex flex-col">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/ghazals" element={<GhazalsPage />} />
          <Route path="/poems" element={<Poems />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default BlogRoutes;
