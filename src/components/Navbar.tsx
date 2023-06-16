import React from 'react';

const Navbar = () => {
  return (
    <nav className=" shadow-md space-x-4 w-screen">
      <div className="flex justify-between text-center py-4 px-2 w-11/12">
        <a href="/" className="text-2xl font-bold no-underline flex  px-6 hover:text-pencil ">
          RUKMINI
        </a>
        <div className=" font-inter flex items-center space-x-4">
          <a href="/" className="text-lg no-underline hover:text-pencil">
            {' '}
            Home
          </a>
          <a href="/poems" className="text-lg no-underline hover:text-pencil">
            Poems
          </a>
          <a href="/ghazals" className="text-lg no-underline hover:text-pencil">
            Ghazals
          </a>
          <a href="/gallery" className="text-lg no-underline hover:text-pencil">
            Gallery
          </a>
          <a href="/about" className="text-lg no-underline hover:text-pencil">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
