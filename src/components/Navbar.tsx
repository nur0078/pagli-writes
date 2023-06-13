import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4 className="logo--text"> RUKMINI</h4>
      <div className="menu--list">
        <ul className="menu--items">
          <li className="menu-category">Home</li>
          <li className="menu-category">Poems</li>
          <li className="menu-category">Ghazals</li>
          <li className="menu-category">Gallery</li>
          <li className="menu-category">About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
