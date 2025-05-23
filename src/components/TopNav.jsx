import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const TopNav = () => {
  const { t, i18n } = useTranslation();
  const [languageOpen, setLanguageOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageOpen(false);
  };  

  const handleScroll = (e, id) => {
    e.preventDefault(); // Предотвращаем стандартный переход
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-80 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home')}
              className="text-sm font-light text-gray-200 tracking-wide font-inter"
            >
              Tour Farm
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-sm font-light text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              {t('topnav.contact')}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              {t('topnav.instagram')}
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              {t('topnav.facebook')}
            </a>
            <div className="flex items-center space-x-6">
              <div className="relative">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-glow"
                >
                  {i18n.language === 'ru' ? 'RU' : i18n.language === 'en' ? 'EN' : 'UZ'}
                </button>
                {languageOpen && (
                  <div className="absolute right-0 mt-2 w-20 bg-gray-800 rounded-lg shadow-lg z-50">
                    <button
                      onClick={() => changeLanguage('ru')}
                      className="block w-full text-left px-4 py-2 text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500"
                    >
                      RU
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className="block w-full text-left px-4 py-2 text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500"
                    >
                      EN
                    </button>
                    <button
                      onClick={() => changeLanguage('uz')}
                      className="block w-full text-left px-4 py-2 text-gray-100 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500"
                    >
                      UZ
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;