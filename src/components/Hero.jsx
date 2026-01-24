import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent-500/30 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-8xl mx-auto px-6 text-center"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-gray-300">Available for opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Sathvika</span>
          </h1>
        </motion.div>

        {/* Subtitle with Typing Effect Look */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light">
              Building
            </span>
            <div className="relative">
              <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                Intelligent AI-Powered Applications
              </span>
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -right-4 top-0 bottom-0 w-0.5 bg-primary-400"
              />
            </div>
          </div>
        </motion.div>

        {/* Role Tags */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 flex-wrap mb-10"
        >
          {['GenAI Engineer', 'Full-Stack AI Developer', 'Data Science Graduate'].map(
            (role, index) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 rounded-full text-sm font-medium tech-badge text-gray-300"
              >
                <HiSparkles className="inline mr-2 text-primary-400" />
                {role}
              </motion.span>
            )
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 flex-wrap mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2"
          >
            <span>View My Work</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary px-8 py-4 rounded-full font-semibold"
          >
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/KanuriSathvika', label: 'GitHub' },
            { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
            { icon: FaEnvelope, href: '#contact', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 transition-colors duration-300"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 -left-12 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl rotate-12">
            🤖
          </div>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-40 right-6 hidden lg:block"
        >
          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl -rotate-12">
            ⚡
          </div>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-40 left-5 hidden lg:block"
        >
          <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-2xl rotate-6">
            🧠
          </div>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1.5s' }}
          className="absolute bottom-32 right-24 hidden lg:block"
        >
          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl -rotate-6">
            💻
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <FaChevronDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
