import './App.css';
import BlogRoutes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <BlogRoutes />
      <Footer />
    </div>
  );
}

export default App;
