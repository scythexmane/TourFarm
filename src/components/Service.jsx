import React from "react";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.mountain.title"),
      price: "1500$",
      description: t("services.mountain.description"),
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: t("services.beach.title"),
      price: "1200$",
      description: t("services.beach.description"),
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: t("services.forest.title"),
      price: "800$",
      description: t("services.forest.description"),
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: t("services.vip.title"),
      price: "3000$",
      description: t("services.vip.description"),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
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
      image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: t("services.safari.title"),
      price: "2500$",
      description: t("services.safari.description"),
      image: "https://discoverwavetourism.com/wp-content/uploads/2023/12/stephane-hurbe-bptwvhcoe18-unsplash-1-1.jpg",
    },
    {
      title: t("services.extreme.title"),
      price: "1800$",
      description: t("services.extreme.description"),
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
  ];

  return (
    <section id="tours" className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-950 bg-opacity-90 backdrop-blur-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat text-center mb-16 animate-fade-in">
          {t("services.title")}
        </h2>
        {/* Zigzag Path */}
        <div className="absolute inset-0 z-0 flex justify-center">
          <svg className="w-full h-full max-w-md lg:max-w-2xl opacity-50" viewBox="0 0 400 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M200 0 L250 150 L150 300 L250 450 L150 600 L250 750 L150 900 L200 1050 L200 1200"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="10 10"
            />
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative space-y-6 sm:space-y-6 lg:space-y-8 z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-6 shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-glow animate-fade-in-delay max-w-md mx-auto lg:max-w-lg ${
                index % 2 === 0 ? "lg:ml-0 lg:mr-auto lg:translate-x-16" : "lg:mr-0 lg:ml-auto lg:-translate-x-16"
              }`}
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(2px)",
                }}
              ></div>
              <div className="absolute inset-0 bg-opacity-30 rounded-lg"></div>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
