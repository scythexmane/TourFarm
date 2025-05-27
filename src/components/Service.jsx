import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import ModalPortal from "./ModalPortal"; // путь адаптируй под свой проект

const Service = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.mountain.title"),
      price: "1500$",
      description: t("services.mountain.description"),
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: t("services.beach.title"),
      price: "1200$",
      description: t("services.beach.description"),
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: t("services.forest.title"),
      price: "800$",
      description: t("services.forest.description"),
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: t("services.vip.title"),
      price: "3000$",
      description: t("services.vip.description"),
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: t("services.desert.title"),
      price: "2000$",
      description: t("services.desert.description"),
      image: "https://gosalalahtour.com/wp-content/uploads/2024/09/16.png",
    },
    {
      title: t("services.city.title"),
      price: "1000$",
      description: t("services.city.description"),
      image:
        "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: t("services.safari.title"),
      price: "2500$",
      description: t("services.safari.description"),
      image:
        "https://discoverwavetourism.com/wp-content/uploads/2023/12/stephane-hurbe-bptwvhcoe18-unsplash-1-1.jpg",
    },
    {
      title: t("services.extreme.title"),
      price: "1800$",
      description: t("services.extreme.description"),
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  // Закрытие по Escape
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const handleBooking = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);
    setSelected(null);
  };

  return (
    <section
      id="tours"
      className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-950 bg-opacity-90 backdrop-blur-xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat text-center mb-16 animate-fade-in">
          {t("services.title")}
        </h2>

        {/* Zigzag Path */}
        <div className="absolute inset-0 z-0 flex justify-center pointer-events-none">
          <svg
            className="w-full h-full max-w-md lg:max-w-2xl opacity-50"
            viewBox="0 0 400 1200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200 0 L250 150 L150 300 L250 450 L150 600 L250 750 L150 900 L200 1050 L200 1200"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="10 10"
            />
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative space-y-6 sm:space-y-6 lg:space-y-8 z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(index)}
              className={`relative rounded-lg p-6 shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-110 hover:shadow-glow animate-fade-in-delay max-w-md mx-auto lg:max-w-lg select-none ${
                index % 2 === 0
                  ? "lg:ml-0 lg:mr-auto lg:translate-x-16"
                  : "lg:mr-0 lg:ml-auto lg:-translate-x-16"
              }`}
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className="absolute inset-0 z-0 rounded-lg"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(2.5px)",
                }}
              ></div>
              <div className="absolute inset-0 bg-opacity-30 rounded-lg "></div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-montserrat mb-2 transition-colors duration-500 hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 font-inter transition-colors duration-500 hover:text-gray-100">
                  {service.description}
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-indigo-400 transition-colors duration-500 hover:text-indigo-300">
                  {service.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {selected !== null && (
          <ModalPortal>
            <>
              <motion.div
                key="backdrop"
                className="fixed inset-0 z-40"
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  backgroundColor: "rgba(0,0,0,0)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                aria-label="Закрыть окно деталей тура"
              />

              <motion.div
                key="modal"
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                role="dialog"
                aria-modal="true"
              >
                <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden">
                  <div className="md:w-1/2 w-full h-64 md:h-auto">
                    <img
                      src={services[selected].image}
                      alt={services[selected].title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full p-8 text-white font-montserrat flex flex-col justify-between gap-6">
                    <div>
                      <h3 className="text-3xl font-semibold mb-2">
                        {services[selected].title}
                      </h3>
                      <p className="text-white/80 text-base mb-4 leading-relaxed">
                        {services[selected].description}
                      </p>
                      <p className="text-indigo-300 text-xl font-semibold">
                        Цена: {services[selected].price}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 md:flex-row">
                      <button
                        onClick={handleBooking}
                        className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-90 transition px-6 py-3 rounded-full text-white font-medium w-full"
                      >
                        Забронировать
                      </button>
                      <button
                        onClick={() => setSelected(null)}
                        className="text-white/60 hover:text-white transition text-sm w-full text-center"
                      >
                        Отмена
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          </ModalPortal>
        )}
      </AnimatePresence>

      {/* Уведомление */}
      <AnimatePresence>
        {showNotification && (
          <ModalPortal>
            <motion.div
              className="fixed top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-8 py-3 rounded-full shadow-lg z-50 font-montserrat font-semibold text-lg select-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              role="alert"
            >
              Мы с вами свяжемся по вашим контактным данным
            </motion.div>
          </ModalPortal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Service;
