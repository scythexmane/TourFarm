import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const { t } = useTranslation();
  const faqs = Array.isArray(t('faqSection.items', { returnObjects: true }))
    ? t('faqSection.items', { returnObjects: true })
    : [];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat text-center mb-16 animate-fade-in">
          {t('faqSection.heading')}
        </h2>
        {faqs.length > 0 ? (
          <div
            className="space-y-6"
            style={{
              minHeight: `${faqs.length * 70 + 300}px`, // Примерная высота: 100px на каждый FAQ + 300px для заголовка и отступов
            }}
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg">
            {t('faqSection.noItems')}
          </p>
        )}
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      x: 0,
      transition: {
        opacity: { duration: 0.5 },
        height: { duration: 0.5 },
        x: { duration: 0.5, ease: 'easeOut' },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      x: -20,
      transition: {
        opacity: { duration: 0.3 },
        height: { duration: 0.3 },
        x: { duration: 0.3, ease: 'easeIn' },
      },
    },
  };

  return (
    <motion.div
      className="border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left text-white font-medium text-lg sm:text-xl flex justify-between items-center hover:bg-gray-700/50 transition-all duration-300"
        whileHover={{ scale: 1.02, backgroundColor: 'rgba(75, 85, 99, 0.5)' }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span
          animate={{ x: isOpen ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {question}
        </motion.span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-indigo-400"
        >
          ↓
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="px-6 py-4 text-gray-300 text-base sm:text-lg font-inter leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQSection;