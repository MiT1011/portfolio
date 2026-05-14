import React from 'react';
import { motion } from 'framer-motion';

const OpenToWork: React.FC = () => {
  const isOpenToWork = import.meta.env.VITE_OPEN_TO_WORK === 'true';

  if (!isOpenToWork) return null;

  return (
    <div className="sticky top-0 z-[60] bg-gradient-to-r from-emerald-600 to-green-500 text-white text-center py-2 px-4 text-sm font-medium shadow-md">
      <div className="flex items-center justify-center gap-2">
        {/* Pulsing green dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>

        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Open to Work — Actively looking for AI/ML Engineer roles.{' '}
          <a
            href="mailto:meetnpatel101112@gmail.com"
            className="underline underline-offset-2 font-semibold hover:text-green-100 transition-colors"
          >
            Let's connect →
          </a>
        </motion.span>
      </div>
    </div>
  );
};

export default OpenToWork;
