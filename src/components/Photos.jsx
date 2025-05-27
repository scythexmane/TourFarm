import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const imageUrls = [
   'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80', // Мальдивы
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80', // Норвегия
  'https://images.wallpaperscraft.ru/image/single/dubai_dubaj_zdanie_28363_1280x1024.jpg', // Япония
  'https://wallpapercat.com/w/full/2/8/1/624998-3840x2160-desktop-4k-iceland-background.jpg', // Альпы
  'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', // Париж
  'https://images.unsplash.com/photo-1508264165352-258db2ebd59b?auto=format&fit=crop&w=1920&q=80', // Марокко
  'https://st.depositphotos.com/1020288/2043/i/450/depositphotos_20437641-stock-photo-view-of-bogliasco.jpg', // Индонезия
  'https://img.goodfon.ru/wallpaper/big/e/68/egypt-egipet-piramida-peyzazh.webp', // Горы в США
  'https://wp-s.ru/wallpapers/10/19/494474508359494/udivitelnyj-pejzazh-v-grecii.jpg', // Дубай
  'https://99px.ru/sstorage/53/2014/11/tmb_115192_8929.jpg', // Бали
  'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'  // Нью-Йорк
];

const photos = [
  { title: 'Бали', description: 'Пляжи, пальмы и закаты.' },
  { title: 'Швейцария', description: 'Горы и чистый воздух.' },
  { title: 'Дубай', description: 'Пустыня и сафари.' },
  { title: 'Норвегия', description: 'Фьорды и северное сияние.' },
  { title: 'Япония', description: 'Цветущая сакура.' },
  { title: 'Италия', description: 'История и пицца.' },
  { title: 'Греция', description: 'Острова и античность.' },
  { title: 'Египет', description: 'Пирамиды и Нил.' },  
  { title: 'Канада', description: 'Озёра и леса.' },
  { title: 'Кения', description: 'Сафари и львы.' },
  { title: 'Бразилия', description: 'Карнавал и пляжи.' },
];

const Photos = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white font-montserrat text-center mb-20">
          Наши туры
        </h2>

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
