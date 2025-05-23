import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setIsLoading(true);
    const botToken = 'YOUR_BOT_TOKEN'; // Замени на свой токен
    const chatId = 'YOUR_CHAT_ID'; // Замени на свой Chat ID
    const message = `
      New Message:
      Name: ${formData.name}
      Message: ${formData.message}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
      setIsSubmitted(true);
      setFormData({ name: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      alert(t('footer.submit_error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="relative bg-gradient-to-b from-black to-gray-900 bg-opacity-90 backdrop-blur-xl text-gray-300 py-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-montserrat">{t('footer.navigation')}</h3>
              <ul className="space-y-2">
                {['home', 'tours', 'photos', 'about', 'contact'].map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#${section}`}
                      onClick={(e) => handleScroll(e, section)}
                      className="text-base sm:text-lg font-inter text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-glow"
                    >
                      {t(`nav.${section}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-montserrat">{t('footer.contact')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-indigo-400 text-lg"></i> {/* Адрес */}
                  <span className="text-base sm:text-lg font-inter text-gray-400 hover:text-gray-100 transition-colors duration-500">
                    {t('footer.address')}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-phone text-indigo-400 text-lg"></i> {/* Телефон */}
                  <a
                    href="tel:+1234567890"
                    className="text-base sm:text-lg font-inter text-gray-400 hover:text-gray-100 transition-colors duration-500"
                  >
                    {t('footer.phone')}
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-envelope text-indigo-400 text-lg"></i> {/* Email */}
                  <a
                    href="mailto:info@tourfarm.com"
                    className="text-base sm:text-lg font-inter text-gray-400 hover:text-gray-100 transition-colors duration-500"
                  >
                    {t('footer.email')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-montserrat">{t('footer.social')}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-glow"
                >
                  <i className="fab fa-instagram text-2xl sm:text-3xl"></i> {/* Instagram */}
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-glow"
                >
                  <i className="fab fa-facebook-f text-2xl sm:text-3xl"></i> {/* Facebook */}
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-glow"
                >
                  <i className="fab fa-twitter text-2xl sm:text-3xl"></i> {/* Twitter */}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-montserrat">{t('footer.contact_form')}</h3>
              <p className="text-base sm:text-lg font-inter text-gray-400">{t('footer.contact_form_desc')}</p>
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('footer.name_placeholder')}
                  className="w-full p-2 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 border border-gray-700"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('footer.message_placeholder')}
                  className="w-full p-2 h-16 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 border border-gray-700"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] transition-all duration-500 ease-in-out transform hover:scale-105 disabled:opacity-50"
                >
                  {isLoading ? t('footer.submitting') : t('footer.send')}
                </button>
              </form>
              {isSubmitted && (
                <p className="mt-2 text-sm sm:text-base text-green-400 animate-fade-in">
                  {t('footer.send_success')}
                </p>
              )}
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm sm:text-base">
          <p className="font-inter">
            © {new Date().getFullYear()} Tour Farm. {t('footer.rights')}
          </p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a
              href="#privacy"
              onClick={(e) => handleScroll(e, 'privacy')}
              className="font-inter hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#terms"
              onClick={(e) => handleScroll(e, 'terms')}
              className="font-inter hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:bg-clip-text transition-all duration-500"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;