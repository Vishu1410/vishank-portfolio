import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-dark-950"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 rounded-2xl border-4 border-transparent border-t-primary-500 border-r-accent-500"
          />
          <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold gradient-text">
            VP
          </span>
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-1 rounded-full bg-dark-200 dark:bg-dark-800 overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1/2 h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
          />
        </div>

        <p className="text-sm text-dark-400 dark:text-dark-500 font-medium">
          Loading...
        </p>
      </div>
    </motion.div>
  );
}
