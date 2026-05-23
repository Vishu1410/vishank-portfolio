import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiFilter } from 'react-icons/hi';

const projects = [
  {
    title: 'Clean Street',
    description: 'A civic engagement platform empowering communities to report cleanliness issues, track resolutions, and collaborate for cleaner neighborhoods. Features role-based access, location-based complaints, and community forums.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    category: 'Full Stack',
    github: 'https://github.com/springboardmentor1607-maker/Group1_Team3',
    live: '#',
    color: 'from-emerald-500 to-teal-600',
    icon: '🏙️',
  },
  {
    title: 'Brainly',
    description: 'A second-brain knowledge management app that lets users save, organize, and share content like tweets, videos, and articles. Built with a modern stack featuring type-safe APIs and intuitive UI.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/Vishu1410/Brainly',
    live: '#',
    color: 'from-violet-500 to-purple-600',
    icon: '🧠',
  },
  {
    title: 'Quiz JEC',
    description: 'An interactive quiz platform designed for college students with features like timed assessments, score tracking, leaderboard and instant feedback. Supports multiple question formats and admin quiz creation.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB','Electron JS'],
    category: 'Full Stack',
    github: 'https://github.com/Vishu1410/QuizJec-2.0',
    live: '#',
    color: 'from-orange-500 to-red-500',
    icon: '📝',
  },
  {
    title: 'Crypto-Price-Tracker',
    description: 'Built a cryptocurrency price tracker with React, Vite, and Material UI that fetches real-time data from the CoinGecko REST API. Implemented a trending coins carousel, searchable paginated market table, coin detail pages, and Chart.js price history (24h–1 year). Added React Router navigation and global USD/INR currency switching via React Context.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB','Material UI','CoinGeko API'],
    category: 'Full Stack',
    github: 'https://github.com/Vishu1410/crypto-price-tracker',
    live: '#',
    color: 'from-orange-500 to-red-500',
    icon: '🪙',
  },
];

const filters = ['All', 'Full Stack', 'React', 'Node.js', 'TypeScript'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) =>
        p.category === activeFilter || p.techStack.includes(activeFilter)
      );

  return (
    <section id="projects" className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          <HiFilter className="self-center text-dark-400 dark:text-dark-500 mr-1 hidden sm:block" size={18} />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700 border border-dark-200/50 dark:border-dark-700/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass-card overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500">
                {/* Project Header / Thumbnail */}
                <div className={`relative h-44 sm:h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  <span className="text-5xl sm:text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </span>
                  
                  {/* Overlay links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110"
                    >
                      <FaGithub size={22} />
                    </a>
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-dark-800 dark:text-dark-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
