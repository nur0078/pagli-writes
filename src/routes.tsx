import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, AboutPage } from './components';

const BlogRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default BlogRoutes;
