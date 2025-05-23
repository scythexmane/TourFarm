import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = [
    'https://img2.akspic.ru/crops/6/6/1/0/7/170166/170166-dubaj-pustynya-safari-makaron-dubajskaya_pustynya-3840x2160.jpg', // Desert Adventure (desert)
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Ocean View (ocean)
  'https://c4.wallpaperflare.com/wallpaper/311/262/324/snowy-mountains-australia-4k-wallpaper-thumb.jpg', // General (mountain landscape for flash sale)
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Nature Escape (forest)
  'https://i.pinimg.com/736x/dd/1c/5b/dd1c5b14fc8446a4741fdb979c4fe3cc.jpg', // City Lights (city skyline)
];

const NewsSection = () => {
  const { t } = useTranslation();
  const newsItems = t('newsSection.items', { returnObjects: true });

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-black to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat text-center mb-16 animate-fade-in">
          {t('newsSection.heading')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} item={item} index={index} t={t} backgroundImage={backgroundImages[index]} />
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsCard = ({ item, index, t, backgroundImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hover: {
      scale: 1.05,
      borderRadius: '20px', // Эффект "расплавления" с изменением углов
      y: [-10, 10, -5], // Волнообразное движение
      transition: {
        y: {
          duration: 0.6,
          times: [0, 0.5, 1],
          ease: 'easeInOut',
        },
        scale: { duration: 0.3, ease: 'easeOut' },
      },
    },
    initial: {
      scale: 1,
      borderRadius: '10px',
      y: 0,
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: 0.1 * index,
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden bg-gray-800/60 backdrop-blur-md border border-gray-700 cursor-pointer"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      animate="initial"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        height: '400px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-fuchsia-900/40 opacity-50 hover:opacity-100 transition-opacity duration-300"></div>
      <motion.div
        className="relative z-10 h-full p-6 flex flex-col justify-between"
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
      >
        <motion.h3
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-montserrat"
          variants={contentVariants}
        >
          {item.title}
        </motion.h3>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="text-gray-300 text-sm sm:text-base font-inter leading-relaxed"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <p>{item.description}</p>
              {item.discount && (
                <p className="mt-2 text-indigo-400 font-semibold">
                  Discount: {item.discount}
                </p>
              )}
              <motion.button
                className="mt-4 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white px-4 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-fuchsia-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('newsSection.learnMore')}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default NewsSection;