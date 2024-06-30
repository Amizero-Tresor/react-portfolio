// src/components/NavBar.jsx
import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-10 text-white">
      <div className="text-lg font-bold font-mochiy">Tresor</div>
      <div>
        <a href="#about" className="ml-4 ">About me</a>
        <a href="#work" className="ml-4">Work</a>
        <a href="#insights" className="ml-4">Insights</a>
        <a href="#contact" className="ml-4">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
