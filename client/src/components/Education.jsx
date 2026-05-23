import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiCalendar, HiLocationMarker, HiStar } from 'react-icons/hi';

const educationData = [
  {
    degree: 'Bachelor of Technology',
    institution: 'Jabalpur Engineering College',
    location: 'Jabalpur, Madhya Pradesh',
    period: '2022 — 2026',
    grade: '7.47 CGPA',
    type: 'college',
    highlights: [
      'Completed B.Tech. with strong foundation in Computer Science fundamentals',
      'Built multiple full-stack projects as part of academic curriculum',
    ],
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'Saraswati Shishu Mandir',
    location: 'Sohagpur, Madhya Pradesh',
    period: '2020 — 2021',
    grade: '93%',
    type: 'school',
    highlights: [
      'Excelled in Mathematics and Science with outstanding academic performance',
      'Scored 93% in Madhya Pradesh Board of Secondary Education Examinations',
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic background and qualifications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.25 }}
              className="relative pl-16 sm:pl-0 mb-14 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-8 z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <HiAcademicCap className="text-white" size={22} />
                </div>
              </div>

              {/* Card */}
              <div
                className={`sm:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
                  }`}
              >
                <div className="glass-card p-6 sm:p-8 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 group relative overflow-hidden">
                  {/* Decorative gradient blob */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                  {/* Header */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 uppercase tracking-wider">
                        {edu.type === 'college' ? 'College' : 'School'}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-dark-800 dark:text-dark-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mt-2">
                      {edu.degree}
                    </h3>

                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-3 mt-4 mb-4 text-sm text-dark-500 dark:text-dark-400">
                    <span className="inline-flex items-center gap-1">
                      <HiCalendar size={14} />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <HiLocationMarker size={14} />
                      {edu.location}
                    </span>
                  </div>

                  {/* Grade badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-200/50 dark:border-primary-700/30 mb-4">
                    <HiStar className="text-amber-500" size={18} />
                    <span className="text-sm font-bold text-dark-800 dark:text-dark-100">
                      {edu.grade}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {edu.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
