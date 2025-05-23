import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const cities = [
  'New York',
  'London',
  'Tokyo',
  'Paris',
  'Dubai',
  'Tashkent',
  'Istanbul',
  'Seoul',
  'Singapore',
  'Los Angeles',
];

// Карта изображений городов
const cityImages = {
  'New York': 'https://plus.unsplash.com/premium_photo-1680430094846-f2003bf654ec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'London': 'https://plus.unsplash.com/premium_photo-1694475482575-fcf2e5e64655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Tokyo': 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Paris': 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBhcmlzJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww',
  'Dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHViYWklMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D',
  'Tashkent': 'https://i.pinimg.com/originals/fd/b6/3a/fdb63a4023c94f35c08003469c693e35.jpg',
  'Istanbul': 'https://c4.wallpaperflare.com/wallpaper/885/999/821/istanbul-4k-night-turkey-wallpaper-preview.jpg',
  'Seoul': 'https://images.unsplash.com/photo-1546874177-9e664107314e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Singapore': 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Los Angeles': 'https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const GeoLocationSection = () => {
  const { t } = useTranslation();
  const [hoveredCity, setHoveredCity] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.geo-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          section.classList.add('animate');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCityClick = (city) => {
    const url = `https://www.google.com/maps?q=${encodeURIComponent(city)}`;
    window.open(url, '_blank');
  };

  const handleMouseEnter = (city) => {
    setHoveredCity(city);
  };

  return (
    <section id="location" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden geo-section">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat text-center mb-16 animate-fade-in">
        {t('geoSection.title')}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
        {/* Область изображения */}
        <div className="lg:w-2/3 w-full h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-800 transition-all duration-300">
          {hoveredCity ? (
            <img
              src={cityImages[hoveredCity]}
              alt={`${hoveredCity} изображение`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 animate-pulse" />
          )}
        </div>

        {/* Список городов */}
        <div className="lg:w-1/3 relative">
          <div className="space-y-3">
            {cities.map((city, i) => (
              <button
                key={city}
                onClick={() => handleCityClick(city)}
                onMouseEnter={() => handleMouseEnter(city)}
                className="w-full px-4 py-2 rounded-lg text-gray-200 font-medium bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600/50 shadow-md transition-all duration-300 hover:from-gray-600 hover:to-gray-700 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoLocationSection;