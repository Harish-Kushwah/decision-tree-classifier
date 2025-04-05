import React from 'react';
import logo from '../assets/logo.svg'; // Make sure to add your logo file

const Header = () => {
  return (
    <header className="p-2 shadow-md bg-white sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <img 
          src={logo} 
          alt="logo" 
          className="w-8 h-8 hover:scale-110 transition-transform"
        />
        <h1 className="text-xl text-gray-800">Decision Tree Classifier</h1>
      </div>
    </header>
  );
};

export default Header;