import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiAcademicCap, HiLightningBolt, HiBriefcase } from 'react-icons/hi';

const stats = [
  { icon: HiCode, label: 'Problems Solved', value: '500+' },
  { icon: HiLightningBolt, label: 'Projects Built', value: '5+' },
  { icon: HiAcademicCap, label: 'Certifications', value: '5+' },
  { icon: HiBriefcase, label: 'Internship', value: '1' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know about my journey and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold mb-4 text-dark-800 dark:text-dark-100">
                👋 A bit about myself
              </h3>
              <div className="space-y-4 text-dark-600 dark:text-dark-300 leading-relaxed">
                <p>
                  I'm a <strong className="text-dark-800 dark:text-dark-100">final‑year B.Tech Computer Science Engineering</strong> student (2022–2026) 
                  with a deep passion for building full-stack web applications that solve real-world problems.
                </p>
                <p>
                  My expertise lies in the <strong className="text-dark-800 dark:text-dark-100">MERN stack</strong> (MongoDB, Express, React, Node.js) 
                  along with <strong className="text-dark-800 dark:text-dark-100">TypeScript</strong>, and I have strong fundamentals in 
                  Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.
                </p>
                <p>
                  I thrive on turning complex ideas into elegant, user-friendly solutions and am always eager to learn 
                  new technologies and contribute to meaningful projects. Currently exploring cloud-native architectures, 
                  system design, and open-source contributions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card p-5 sm:p-6 text-center group hover:shadow-lg hover:shadow-primary-500/10 transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors">
                  <stat.icon className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-dark-800 dark:text-dark-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-500 dark:text-dark-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
