import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"> </h2>
          <div className="mx-auto max-w-3xl bg-gradient-to-r from-purple-300 to-indigo-300 dark:from-purple-800 dark:to-indigo-900 p-10 sm:p-16 rounded-2xl shadow-xl">
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl font-handwriting text-gray-800 dark:text-white leading-relaxed"
              style={{ fontFamily: "'Caveat', 'Brush Script MT', cursive" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              "Your Problem Statement + Resources + Data"→ Your requirement, fulfilled.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
