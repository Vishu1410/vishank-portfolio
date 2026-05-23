import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiAcademicCap, HiCode, HiGlobe, HiStar } from 'react-icons/hi';

const achievements = [
  {
    icon: HiCode,
    title: '500+ DSA Problems',
    description: 'Solved over 500 Data Structures and Algorithms problems across platforms like LeetCode, CodeForces, and GeeksforGeeks.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: HiAcademicCap,
    title: '100xDevs Certification',
    description: 'Completed the comprehensive 100xDevs cohort covering full-stack development, system design, and DevOps fundamentals.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: HiGlobe,
    title: 'Open Source Contributor',
    description: 'Active contributor to open-source projects, collaborating with developers worldwide and building tools for the community.',
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: HiStar,
    title: 'Infosys Springboard Intern',
    description: 'Selected for the Full Stack Developer internship at Infosys Springboard, developing production-ready applications.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Milestones and recognitions in my developer journey
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-6 sm:p-8 group hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${item.bgColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={item.iconColor} size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-800 dark:text-dark-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
