import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TELEGRAM_BOT_TOKEN = '7605889368:AAH3gZgvbdd74KcH_8u6ZxlqPb1gw56ujPM'; // Ваш токен
const TELEGRAM_CHAT_ID = '7605889368'; // Замените на правильный Chat ID группы или чата

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const messageText = `
*${t('contactSection.newMessage')}*
${t('contactSection.name')}: ${formData.name}
${t('contactSection.message')}: ${formData.message}
    `.trim();

    console.log('Sending message:', messageText); // Лог для отладки

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: '7605889368',
            text: messageText,
            parse_mode: 'Markdown',
          }),
        }
      );

      const data = await response.json();
      console.log('API Response:', data); // Лог ответа от Telegram

      if (data.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Telegram API Error:', data.description);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Fetch Error:', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black via-gray-990 to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat text-center mb-16 animate-fade-in">
          {t('contactSection.title')}
        </div>

        {/* Форма */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-gray-800/50 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-gray-700/50 transition-all duration-500 animate-slide-up"
          >
            {/* Поле Имя */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2 transition-all duration-300"
              >
                {t('contactSection.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-600/50 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-gray-900 transition-all duration-300 hover:border-gray-500"
                placeholder={t('contactSection.namePlaceholder')}
              />
            </div>

            {/* Поле Сообщение */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2 transition-all duration-300"
              >
                {t('contactSection.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-600/50 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-gray-900 transition-all duration-300 hover:border-gray-500 resize-none"
                placeholder={t('contactSection.messagePlaceholder')}
              />
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 transform ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? t('contactSection.submitting') : t('contactSection.submit')}
            </button>

            {/* Сообщение о статусе */}
            {submitStatus === 'success' && (
              <div className="mt-4 text-center text-green-400 animate-fade-in">
                {t('contactSection.successMessage')}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 text-center text-red-400 animate-fade-in">
                {t('contactSection.errorMessage')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
