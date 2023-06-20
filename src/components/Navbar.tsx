import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" shadow-md">
      <div className="space-x-4 w-full m-auto">
        <div className="flex justify-between text-center py-4 px-2 w-11/12">
          <a href="/" className="text-2xl font-bold no-underline flex  px-6 hover:text-pencil ">
            RUKMINI
          </a>
          <div className=" font-inter flex items-center space-x-4">
            <AnimatedHoverLink text={'Home'} />
            <AnimatedHoverLink text={'Poems'} />
            <AnimatedHoverLink text={'Ghazals'} />
            <AnimatedHoverLink text={'Gallery'} />
            <AnimatedHoverLink text={'About'} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const AnimatedHoverLink = ({ text }: { text: string }) => {
  return (
    <Link to={text == 'Home' ? '/' : `/${text.toLowerCase()}`} className="text-lg group text-main ">
      {text}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-pencil"></span>
    </Link>
  );
};
