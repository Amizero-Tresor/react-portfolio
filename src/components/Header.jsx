// src/components/Header.jsx
import React from 'react';
import headImage from '../assets/headImage.png';

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-center  gap-20 text-white py-10 px-10">
      <h1 className="text-5xl font-bold font-mochiy text-[12rem] mb-4">A Tresor</h1>
      <img src={headImage} alt="" />
    </header>
  );
};

export default Header;
