import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
                                  
const Nav = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e, id) => {
    e.preventDefault(); // Предотвращаем стандартный переход
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gradient-to-b from-gray-950 to-black bg-opacity-90 backdrop-blur-xl z-40 shadow-lg mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home')}
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text relative group transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-glow"
            >
              {t('nav.home')}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#tours"
              onClick={(e) => handleScroll(e, 'tours')}
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text relative group transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-glow"
            >
              {t('nav.tours')}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, 'location')}
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text relative group transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-glow"
            >
              {t('nav.about')}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text relative group transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-glow"
            >
              {t('nav.contact')}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#book"
              onClick={(e) => handleScroll(e, 'book')}
              className="relative bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1"
            >
              {t('nav.book')}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 opacity-0 hover:opacity-20 transition-opacity duration-500"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-100 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 bg-opacity-95 animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:space-y-3 sm:px-3">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home')}
              className="block px-3 py-2 text-base sm:text-lg font-semibold text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500 ease-in-out"
            >
              {t('nav.home')}
            </a>
            <a
              href="#tours"
              onClick={(e) => handleScroll(e, 'tours')}
              className="block px-3 py-2 text-base sm:text-lg font-semibold text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500 ease-in-out"
            >
              {t('nav.tours')}
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="block px-3 py-2 text-base sm:text-lg font-semibold text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500 ease-in-out"
            >
              {t('nav.about')}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="block px-3 py-2 text-base sm:text-lg font-semibold text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500 ease-in-out"
            >
              {t('nav.contact')}
            </a>
            <a
              href="#book"
              onClick={(e) => handleScroll(e, 'book')}
              className="block px-3 py-2 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white rounded-full font-semibold shadow-lg hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] transition-all duration-500 ease-in-out text-center"
            >
              {t('nav.book')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;