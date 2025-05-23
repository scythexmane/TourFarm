import React from 'react';
import { useTranslation } from 'react-i18next';

const imageUrls = [
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://img2.akspic.ru/crops/6/6/1/0/7/170166/170166-dubaj-pustynya-safari-makaron-dubajskaya_pustynya-3840x2160.jpg',
  'https://img3.akspic.ru/previews/4/3/9/4/7/174934/174934-priroda-prirodnyj_landshaft-peyzash-voda-oblako-x750.jpg',
];

const Photos = () => {
  const { t, i18n } = useTranslation();

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const photos = t('photosSection.photos', { returnObjects: true });

  return (
    <section id="photos" className="relative py-24 bg-gradient-to-b from-gray-950 to-black bg-opacity-90 backdrop-blur-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Language Switcher */}
        <div className="flex justify-end mb-4">
          <select
            value={i18n.language}
            onChange={handleLangChange}
            className="text-black px-3 py-1 rounded"
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
            <option value="uz">Oʻzbekcha</option>
          </select>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat text-center mb-16 animate-fade-in">
          {t('photosSection.heading')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-glow animate-fade-in-delay group"
              style={{
                backgroundImage: `url(${imageUrls[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: `${index * 200}ms`,
                height: '400px',
              }}
            >
              <div className="absolute inset-0 bg-opacity-50 rounded-lg transition-all duration-500 group-hover:bg-opacity-30"></div>
              <div className="absolute inset-0 rounded-lg border-4 border-transparent transition-all duration-500 group-hover:border-gradient-to-r group-hover:from-indigo-500 group-hover:to-fuchsia-500"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-montserrat mb-2 transition-colors duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-fuchsia-500 group-hover:bg-clip-text">
                  {photo.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-inter transition-colors duration-500 group-hover:text-gray-100">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photos;
