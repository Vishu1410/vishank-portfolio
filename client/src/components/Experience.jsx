import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Infosys Springboard',
    location: 'Remote',
    period: '2024 — 2025',
    project: 'Clean Street — Community Cleanliness Platform',
    description: 'Built a full-stack civic engagement platform to improve urban cleanliness through technology and community participation.',
    highlights: [
      'Developed role-based authentication system with admin, moderator, and user access levels',
      'Implemented location-based complaint filing system with map integration for geo-tagged reports',
      'Built community features including forums, upvoting, and collaborative issue tracking',
      'Designed RESTful APIs with Express.js and MongoDB for scalable data management',
      'Created responsive React frontend with real-time status updates and notifications',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Professional experience and internships
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden sm:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="relative sm:pl-0 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-950 z-10 shadow-lg shadow-primary-500/30" />

              {/* Card */}
              <div className={`sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                <div className="glass-card p-6 sm:p-8 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start gap-2 mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-dark-800 dark:text-dark-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-dark-500 dark:text-dark-400">
                    <span className="inline-flex items-center gap-1">
                      <HiCalendar size={14} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <HiLocationMarker size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Project name */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                    <HiBriefcase size={14} />
                    {exp.project}
                  </div>

                  {/* Description */}
                  <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
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
