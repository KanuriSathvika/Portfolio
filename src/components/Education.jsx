import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiBookOpen, HiStar } from 'react-icons/hi'

const educationData = [
  {
    degree: 'B.Tech – Computer Science (Data Science)',
    institution: 'Jain (Deemed-to-be University)',
    period: 'Aug 2021 – May 2025',
    grade: '9.31 CGPA',
    icon: '🎓',
    color: 'from-primary-500 to-primary-600',
    coursework: [
      'Data Science & Analytics',
      'Machine Learning Fundamentals',
      'Python Programming',
      'Database Management Systems',
    ],
    highlights: [
      'Specialized in Data Science',
      'Strong academic performance',
      'Hands-on project experience',
    ],
  },
  {
    degree: 'Intermediate Education',
    institution: 'Sri Chaitanya College of Education',
    period: 'Completed',
    grade: '98.4%',
    icon: '🏫',
    color: 'from-accent-500 to-accent-600',
    coursework: ['Mathematics', 'Physics', 'Chemistry'],
    highlights: [
      'Outstanding academic achievement',
      'Top performer in class',
    ],
  },
]

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-900/5 to-transparent" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-5xl mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A strong academic foundation in Computer Science with specialization in Data Science.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl glass card-hover">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-4xl flex-shrink-0`}
                  >
                    {edu.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-400 font-medium">
                          <HiAcademicCap className="w-5 h-5" />
                          {edu.institution}
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-white font-bold text-lg">
                          {edu.grade}
                        </span>
                        <span className="text-sm text-gray-400">{edu.period}</span>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div className="mb-4">
                      <h4 className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                        <HiBookOpen className="w-4 h-4" />
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-full text-sm tech-badge text-gray-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                        <HiStar className="w-4 h-4" />
                        Highlights
                      </h4>
                      <ul className="flex flex-wrap gap-4">
                        {edu.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-400"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-10 md:left-16 top-full h-8 w-px bg-gradient-to-b from-primary-500/50 to-transparent hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications placeholder */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
            <span className="text-2xl">📚</span>
            <span className="text-gray-300">
              Continuously learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Education
