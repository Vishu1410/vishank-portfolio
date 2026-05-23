import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 dark:bg-primary-400/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 py-20 pt-28 sm:pt-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200/50 dark:border-primary-700/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Vishank</span>
              <br />
              <span className="gradient-text">Pathariya</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 font-medium mb-2"
            >
              Full Stack Developer | MERN Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-dark-400 dark:text-dark-500 max-w-lg mx-auto lg:mx-0 mb-8 text-base sm:text-lg leading-relaxed"
            >
              Passionate about building scalable web applications with modern technologies.
              Turning complex problems into elegant, user-friendly solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <Link to="projects" smooth duration={500} offset={-80}>
                <button className="btn-primary text-sm sm:text-base">
                  View Projects
                  <HiArrowDown className="animate-bounce" />
                </button>
              </Link>
              <a href="/Vishank-Pathariya-Resume.pdf" download>
                <button className="btn-secondary text-sm sm:text-base">
                  <HiDownload />
                  Download Resume
                </button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/Vishu1410"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vishank-pathariya-7769a5273/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 blur-2xl opacity-20 animate-pulse-glow" />

              {/* Image container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-2xl shadow-primary-500/10">
                <div className="w-full h-full bg-gradient-to-br from-primary-400 via-accent-500 to-primary-600 flex items-center justify-center">
                  <img
                    src="/Vishank-Pathariya.png"
                    alt="Profile"
                    className = "w-full h-full object-cover object-[50%_15%]"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add("bg-gradient-to-br", "from-primary-400", "via-accent-500", "to-primary-600");
                      e.target.parentElement.innerHTML = '<span class="text-6xl font-bold text-white/90">VP</span>';
                    }}
                    
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 sm:top-2 sm:right-2 px-3 py-1.5 rounded-xl glass-card shadow-lg text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400"
              >
                MERN Stack
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 px-3 py-1.5 rounded-xl glass-card shadow-lg text-xs sm:text-sm font-semibold text-accent-600 dark:text-accent-400"
              >
                500+ DSA ✓
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-dark-300 dark:border-dark-600 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-dark-400 dark:bg-dark-500" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
