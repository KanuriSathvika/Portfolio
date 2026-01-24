import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiLightningBolt, HiCube, HiChartBar } from 'react-icons/hi'
import profileImage from '/sathvika.png'

const About = () => {
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

  const highlights = [
    {
      icon: HiCode,
      title: 'Full-Stack',
      description: 'React, FastAPI, Modern Web',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: HiLightningBolt,
      title: 'GenAI',
      description: 'RAG, LLMs, Prompt Engineering',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: HiCube,
      title: 'Agentic AI',
      description: 'Multi-Agent Systems',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: HiChartBar,
      title: 'Data Science',
      description: 'Analysis & ML',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Crafting the Future with{' '}
            <span className="gradient-text">AI & Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-primary-500/30"
              />
              
              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-dashed border-accent-500/30"
              />

              {/* Profile Photo */}
              <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Sathvika Kanuri"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
              </div>

              {/* Floating Tech Icons */}
              {[
                { emoji: '🐍', position: 'top-0 left-1/2 -translate-x-1/2', delay: 0 },
                { emoji: '⚛️', position: 'right-0 top-1/2 -translate-y-1/2', delay: 0.5 },
                { emoji: '🤖', position: 'bottom-0 left-1/2 -translate-x-1/2', delay: 1 },
                { emoji: '☁️', position: 'left-0 top-1/2 -translate-y-1/2', delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + item.delay, type: 'spring' }}
                  className={`absolute ${item.position}`}
                >
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl"
                  >
                    {item.emoji}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a <span className="text-white font-medium">GenAI Engineer</span> passionate 
              about creating intelligent systems that bridge{' '}
              <span className="text-primary-400">AI research and real-world applications</span>.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              As a <span className="text-white font-medium">Computer Science graduate specializing in Data Science</span> from 
              Jain University with hands-on experience at{' '}
              <span className="text-accent-400">DataSmith AI</span>, I focus on building 
              intelligent, scalable, and user-centric applications.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With strong exposure to <span className="text-white font-medium">frontend, backend, and AI pipelines</span>, 
              I enjoy working on real-world problems where AI systems directly improve 
              user experience and decision-making.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-xl glass">
                <div className="text-3xl font-display font-bold gradient-text">9.31</div>
                <div className="text-sm text-gray-400">CGPA</div>
              </div>
              <div className="p-4 rounded-xl glass">
                <div className="text-3xl font-display font-bold gradient-text">2025</div>
                <div className="text-sm text-gray-400">B.Tech Graduate</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 rounded-2xl glass card-hover cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
