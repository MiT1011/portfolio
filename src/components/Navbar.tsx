import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-purple-600">Portfolio</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="hover:text-purple-600 px-3 py-2">Home</a>
              <a href="#about" className="hover:text-purple-600 px-3 py-2">About</a>
              <a href="#projects" className="hover:text-purple-600 px-3 py-2">Projects</a>
              <a href="#blog" className="hover:text-purple-600 px-3 py-2">Blog</a>
              <a href="#contact" className="hover:text-purple-600 px-3 py-2">Contact</a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-purple-600 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 hover:text-purple-600">Home</a>
            <a href="#about" className="block px-3 py-2 hover:text-purple-600">About</a>
            <a href="#projects" className="block px-3 py-2 hover:text-purple-600">Projects</a>
            <a href="#blog" className="block px-3 py-2 hover:text-purple-600">Blog</a>
            <a href="#contact" className="block px-3 py-2 hover:text-purple-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;