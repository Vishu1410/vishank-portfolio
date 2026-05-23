import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiC, SiCplusplus, SiJavascript, SiTypescript, SiPython,
  SiReact, SiNextdotjs, SiTailwindcss, SiExpress,
  SiMongodb, SiPostgresql, SiPrisma,
  SiGit, SiPostman, SiNodedotjs,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
  },
  {
    title: 'Web Technologies',
    icon: '🌐',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
              className="glass-card p-6 sm:p-8 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-dark-800 dark:text-dark-100">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ y: -3, scale: 1.05, transition: { duration: 0.2 } }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-dark-50 dark:bg-dark-800/50 hover:bg-white dark:hover:bg-dark-700/50 border border-transparent hover:border-dark-200/50 dark:hover:border-dark-600/50 transition-all duration-300 cursor-default group"
                  >
                    <skill.icon
                      size={28}
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs font-medium text-dark-600 dark:text-dark-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
