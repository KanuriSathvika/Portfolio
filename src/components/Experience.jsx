import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiBriefcase,
  HiCalendar,
  HiLocationMarker,
  HiCheckCircle,
} from 'react-icons/hi'

const experiences = [
  {
    title: 'GenAI Intern',
    company: 'DataSmith AI',
    location: 'Pune, India (On-site)',
    period: 'Jul 2025 – Present',
    type: 'Internship',
    description:
      'Building and enhancing Generative AI applications using cutting-edge technologies.',
    highlights: [
      'Built and enhanced Generative AI applications using RAG pipelines',
      'Worked on multi-agent workflows for autonomous task execution',
      'Integrated FastAPI backends with frontend applications',
      'Deployed and monitored services using Azure App Services',
      'Used Application Insights for logging, tracing, and performance monitoring',
      'Collaborated with cross-functional teams in a startup environment',
    ],
    technologies: ['Python', 'FastAPI', 'RAG', 'Azure', 'LLMs', 'Multi-Agent AI'],
    color: 'from-primary-500 to-primary-600',
    current: true,
  },
  {
    title: 'Data Science Intern',
    company: 'Rural Handmade',
    location: 'Remote',
    period: 'Jul 2023 – Aug 2023',
    type: 'Internship',
    description:
      'Performed data analysis and built exploratory insights for business use cases.',
    highlights: [
      'Performed data analysis and preprocessing on structured datasets',
      'Built exploratory insights for business use cases',
      'Gained hands-on exposure to applied data science workflows',
    ],
    technologies: ['Python', 'Data Analysis', 'Pandas', 'Data Visualization'],
    color: 'from-accent-500 to-accent-600',
    current: false,
  },
]

const Experience = () => {
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
    <section id="experience" className="relative py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey building AI-powered solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500/20 hidden md:block" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-16 flex ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-6 -ml-2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 hidden md:block" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`w-full md:w-[calc(50%-1rem)] ${
                    isLeft ? 'md:pr-4' : 'md:pl-4'
                  }`}
                >
                  <div className="p-6 rounded-2xl glass card-hover">
                    {exp.current && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Currently Working
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-primary-400 mb-2">
                      <HiBriefcase />
                      {exp.company}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <HiCalendar /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiLocationMarker /> {exp.location}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <HiCheckCircle className="mt-0.5 text-primary-400" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs tech-badge text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
