import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

const ClientCommentsCarousel = () => {
  const { t } = useTranslation();

  const comments = [
    {
      id: 1,
      name: t('commentsSection.items.0.name'),
      date: t('commentsSection.items.0.date'),
      text: t('commentsSection.items.0.text'),
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
    },
    {
      id: 2,
      name: t('commentsSection.items.1.name'),
      date: t('commentsSection.items.1.date'),
      text: t('commentsSection.items.1.text'),
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
    },
    {
      id: 3,
      name: t('commentsSection.items.2.name'),
      date: t('commentsSection.items.2.date'),
      text: t('commentsSection.items.2.text'),
      avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
    },
    {
      id: 4,
      name: t('commentsSection.items.3.name'),
      date: t('commentsSection.items.3.date'),
      text: t('commentsSection.items.3.text'),
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
    },
    {
      id: 5,
      name: t('commentsSection.items.4.name'),
      date: t('commentsSection.items.4.date'),
      text: t('commentsSection.items.4.text'),
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
    },
    {
      id: 6,
      name: t('commentsSection.items.5.name'),
      date: t('commentsSection.items.5.date'),
      text: t('commentsSection.items.5.text'),
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
    },
    {
      id: 7,
      name: t('commentsSection.items.6.name'),
      date: t('commentsSection.items.6.date'),
      text: t('commentsSection.items.6.text'),
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
    },
    {
      id: 8,
      name: t('commentsSection.items.7.name'),
      date: t('commentsSection.items.7.date'),
      text: t('commentsSection.items.7.text'),
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
    },
    {
      id: 9,
      name: t('commentsSection.items.8.name'),
      date: t('commentsSection.items.8.date'),
      text: t('commentsSection.items.8.text'),
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
    },
    {
      id: 10,
      name: t('commentsSection.items.9.name'),
      date: t('commentsSection.items.9.date'),
      text: t('commentsSection.items.9.text'),
      avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
    },
    {
      id: 11,
      name: t('commentsSection.items.10.name'),
      date: t('commentsSection.items.10.date'),
      text: t('commentsSection.items.10.text'),
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
    },

  ];

  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      perMove: 1,
      autoScroll: {
        speed: 0.5,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
      arrows: false,
      pagination: false,
      gap: '2rem',
      padding: { left: '10rem', right: '10rem' },
      breakpoints: {
        640: {
          perPage: 1,
          padding: { left: '1rem', right: '1rem' },
          gap: '1rem',
        },
        1024: {
          perPage: 2,
          padding: { left: '3rem', right: '3rem' },
          gap: '1.5rem',
        },
      },
    });

    splide.mount({ AutoScroll });
    return () => splide.destroy();
  }, []);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-950 via-gray-800 to-black">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-0">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white text-center mb-12 sm:mb-16 font-sans">
          {t('commentsSection.heading')}
        </h2>
        <div className="splide" aria-label="Client Comments Carousel">
          <div className="splide__track">
            <ul className="splide__list bg-transparent">
              {comments.map((comment) => (
                <li key={comment.id} className="splide__slide">
                  <div
                    className="w-full max-w-md h-48 p-4 sm:p-6 rounded-xl bg-gray-900/80 border border-gray-800/50 backdrop-blur-sm mx-auto flex flex-col transition-all duration-300 hover:bg-gray-900/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.2),0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] hover:-translate-y-1"
                    style={{
                      background:' linear-gradient(155deg,rgba(0, 11, 36, 1) 4%, rgba(33, 43, 65, 1) 31%)'
                    }}
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      <img
                        src={comment.avatar}
                        alt={`${comment.name}'s avatar`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 object-cover border border-gray-950"
                      />
                      <div>
                        <h4 className="text-white font-semibold text-base sm:text-lg font-sans">
                          {comment.name}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm font-sans">
                          {comment.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans flex-1 overflow-hidden text-ellipsis">
                      {comment.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCommentsCarousel;
