import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch custom event for Hero animation
    const event = new CustomEvent('restartHeroAnimation');
    window.dispatchEvent(event);
    
    // Smooth scroll to home section
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    // Close mobile menu if open
    if (isOpen) setIsOpen(false);
    
    // Smooth scroll to the target section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-purple-600">Meet Patel</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="hover:text-purple-600 px-3 py-2" onClick={handleHomeClick}>Home</a>
              <a href="#about" className="hover:text-purple-600 px-3 py-2" onClick={(e) => handleNavClick(e, 'about')}>About</a>
              <a href="#projects" className="hover:text-purple-600 px-3 py-2" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
              <a href="#footer" className="hover:text-purple-600 px-3 py-2" onClick={(e) => handleNavClick(e, 'footer')}>Contact</a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-purple-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            <a href="#home" className="block px-3 py-2 hover:text-purple-600" onClick={handleHomeClick}>Home</a>
            <a href="#about" className="block px-3 py-2 hover:text-purple-600" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#projects" className="block px-3 py-2 hover:text-purple-600" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            <a href="#footer" className="block px-3 py-2 hover:text-purple-600" onClick={(e) => handleNavClick(e, 'footer')}>Contact</a>
            <button
              onClick={toggleTheme}
              className="w-full text-left px-3 py-2 hover:text-purple-600 flex items-center gap-2"
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;