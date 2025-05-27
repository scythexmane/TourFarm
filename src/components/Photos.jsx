import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const imageUrls = [
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://img2.akspic.ru/crops/6/6/1/0/7/170166/170166-dubaj-pustynya-safari-makaron-dubajskaya_pustynya-3840x2160.jpg',
  'https://img3.akspic.ru/previews/4/3/9/4/7/174934/174934-priroda-prirodnyj_landshaft-peyzash-voda-oblako-x750.jpg',
  'https://i.pinimg.com/originals/0c/64/b1/0c64b1f365c1791ff95c1d6d55fdb5ae.jpg',
  'https://cdn.wallpapersafari.com/45/18/oQlj41.jpg',
  'https://wallpapercave.com/wp/wp4761821.jpg',
  'https://images.unsplash.com/photo-1558980394-0cfb6bd1f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1610878180933-66b76aee7e3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
];

const Photos = () => {
  const { t } = useTranslation();
  const photos = t('photosSection.photos', { returnObjects: true });
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
  };

  return (
    <section id="photos" className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white font-montserrat text-center mb-20">
          {t('photosSection.heading')}
        </h2>

        {/* Gallery Scroll */}
        <div className="relative overflow-x-auto">
          <div
            ref={scrollRef}
            className="flex gap-12 snap-x snap-mandatory px-4 lg:px-0 overflow-x-scroll scrollbar-hide pb-8"
            style={{ perspective: '1500px' }}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className="min-w-[320px] h-[420px] flex-shrink-0 snap-center rounded-3xl shadow-xl bg-black overflow-hidden relative cursor-pointer group transition-transform duration-700"
                style={{
                  backgroundImage: `url(${imageUrls[index % imageUrls.length]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                initial={{ opacity: 0, y: 60, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.8, 0.25, 1],
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 opacity-60 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-fuchsia-500 rounded-3xl transition-all duration-500" />
                <div className="absolute bottom-0 p-6 z-10">
                  <h3 className="text-2xl font-bold text-white font-montserrat mb-2 group-hover:tracking-wide transition-all duration-500">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-inter">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="absolute right-8 bottom-4 flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md hover:scale-105 transition-transform duration-300"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md hover:scale-105 transition-transform duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;
  