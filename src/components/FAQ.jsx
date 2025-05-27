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
              minHeight: `${faqs.length * 70 + 300}px`,
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

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="px-6 py-4 text-gray-300 text-base sm:text-lg font-inter leading-relaxed"
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQSection;
