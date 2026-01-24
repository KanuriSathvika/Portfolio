import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiLightningBolt, HiCode, HiDatabase, HiCloud } from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'RAG-Based Question Answering System',
    description:
      'Built an end-to-end RAG pipeline using LLMs and vector search. Features FastAPI backend with document ingestion & semantic retrieval. Improved answer relevance and significantly reduced hallucinations.',
    image: null,
    icon: '🤖',
    tags: ['Python', 'FastAPI', 'RAG', 'LLMs', 'Vector DB'],
    category: 'ai',
    highlights: [
      'Semantic document retrieval',
      'LLM integration for responses',
      'Reduced hallucinations',
    ],
    github: 'https://github.com/KanuriSathvika',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Post Discharge Medical AI Assistant',
    description:
      'AI-powered healthcare assistant that provides personalized post-discharge care guidance. Features intelligent recommendations for medication management, appointment scheduling, and health monitoring using advanced LLM technology.',
    image: null,
    icon: '🏥',
    tags: ['Python', 'Healthcare AI', 'LLMs', 'Medical Tech', 'FastAPI'],
    category: 'ai',
    highlights: [
      'Personalized care guidance',
      'Medication management',
      'Health monitoring',
    ],
    github: 'https://github.com/KanuriSathvika/Post_Discharge_Medical_AI_Assistant',
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Mini Chatbot',
    description:
      'Intelligent conversational AI chatbot with natural language processing capabilities. Features context-aware responses, multi-turn conversations, and seamless integration with modern web frameworks.',
    image: null,
    icon: '💬',
    tags: ['Python', 'NLP', 'Chatbot', 'AI', 'Machine Learning'],
    category: 'ai',
    highlights: [
      'Natural language processing',
      'Context-aware conversations',
      'Easy integration',
    ],
    github: 'https://github.com/KanuriSathvika/Mini_Chatbot',
    demo: null,
    featured: true,
  },
  {
    id: 4,
    title: 'Food Delivery E-commerce Website',
    description:
      'Full-stack food delivery platform with real-time order tracking, secure payment integration, and responsive design. Features restaurant management, cart functionality, and user authentication.',
    image: null,
    icon: '🍕',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'E-commerce'],
    category: 'fullstack',
    highlights: [
      'Real-time order tracking',
      'Secure payment gateway',
      'Restaurant management',
    ],
    github: 'https://github.com/KanuriSathvika/Food-Delivery-Ecommerce-Website',
    demo: null,
    featured: false,
  },
]

const categories = [
  { id: 'all', name: 'All Projects', icon: HiLightningBolt },
  { id: 'ai', name: 'AI/GenAI', icon: HiCode },
  { id: 'fullstack', name: 'Full-Stack', icon: HiCloud },
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px]" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of AI-powered applications and full-stack projects showcasing my expertise in GenAI, RAG systems, and modern web development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-2xl glass card-hover overflow-hidden">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium">
                      Featured
                    </div>
                  )}

                  {/* Icon Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium tech-badge text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>View Code</span>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <motion.a
            href="https://github.com/KanuriSathvika"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-secondary px-8 py-4 rounded-full font-medium"
          >
            <FaGithub className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
