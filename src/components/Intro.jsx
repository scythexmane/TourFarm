import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation();

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: t('intro.slides.0.alt'),
      title: (
        <>
          <span className="font-montserrat">{t('intro.slides.0.title.part1')}</span>{" "}
          <span className="font-bold text-green-500 font-montserrat">{t('intro.slides.0.title.part2')}</span>{" "}
          <span className="font-montserrat">{t('intro.slides.0.title.part3')}</span>
        </>
      ),
    },
    {
      image:
        "https://img1.akspic.ru/previews/6/4/4/3/33446/33446-gora-atmosfera-pejzazhi_gor-peyzash-dikaya_mestnost-x750.jpg",
      alt: t('intro.slides.1.alt'),
      title: (
        <>
          <span className="font-bold uppercase text-red-500 font-montserrat">
            {t('intro.slides.1.title.part1')}
          </span>{" "}
          <span className="font-inter">{t('intro.slides.1.title.part2')}</span>
        </>
      ),
    },
    {
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: t('intro.slides.2.alt'),
      title: (
        <>
          <span className="font-bold uppercase text-orange-500 font-montserrat">
            {t('intro.slides.2.title.part1')}
          </span>{" "}
          <span className="font-inter">{t('intro.slides.2.title.part2')}</span>
        </>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-104px)] sm:h-[calc(100vh-104px)] w-full overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        effect="slide"
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 sm:scale-110 transition-transform duration-10000 ease-in-out"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 to-black/80 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight animate-fade-in">
                  {slide.title}
                </h1>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-inter animate-fade-in-delay">
                  {t('intro.subtitle')}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex space-x-2 sm:space-x-4 z-10">
        <button className="custom-prev bg-gray-950 bg-opacity-50 rounded-full p-2 sm:p-3 text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:shadow-glow transition-all duration-300 ease-in-out transform hover:scale-110">
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="custom-next bg-gray-950 bg-opacity-50 rounded-full p-2 sm:p-3 text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:shadow-glow transition-all duration-300 ease-in-out transform hover:scale-110">
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Intro;