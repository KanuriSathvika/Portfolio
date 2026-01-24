import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiFastapi,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiMicrosoftazure,
  SiStreamlit,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'
import { FaJava, FaDatabase, FaBrain, FaRobot, FaCloud, FaTools } from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'

const skillCategories = [
  {
    title: 'Programming & Development',
    icon: HiLightningBolt,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', icon: SiPython, level: 90 },
      { name: 'JavaScript', icon: SiJavascript, level: 80 },
      { name: 'Java', icon: FaJava, level: 70 },
      { name: 'FastAPI', icon: SiFastapi, level: 85 },
      { name: 'React.js', icon: SiReact, level: 80 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
      { name: 'HTML5', icon: SiHtml5, level: 90 },
      { name: 'CSS3', icon: SiCss3, level: 85 },
    ],
  },
  {
    title: 'AI & GenAI',
    icon: FaBrain,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'RAG Systems', icon: FaRobot, level: 85 },
      { name: 'Agentic AI', icon: FaBrain, level: 80 },
      { name: 'Prompt Engineering', icon: HiLightningBolt, level: 85 },
      { name: 'LLM Integration', icon: FaRobot, level: 80 },
      { name: 'Vector Databases', icon: FaDatabase, level: 75 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Microsoft Azure', icon: SiMicrosoftazure, level: 75 },
      { name: 'App Service', icon: FaCloud, level: 70 },
      { name: 'Service Bus', icon: FaCloud, level: 75 },
      { name: 'Application Insights', icon: FaCloud, level: 80 },
      { name: 'Docker', icon: SiDocker, level: 65 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: FaTools,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Git & GitHub', icon: SiGit, level: 85 },
      { name: 'Streamlit', icon: SiStreamlit, level: 80 },
      { name: 'REST APIs', icon: HiLightningBolt, level: 85 },
      { name: 'MS SQL Server', icon: FaDatabase, level: 75 },
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[150px] -translate-y-1/2" />
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
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning modern web development, AI/ML, cloud infrastructure, and DevOps practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-6 rounded-2xl glass card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Technologies */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-center text-lg font-medium text-gray-400 mb-8">
            Technologies I work with
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { Icon: SiPython, name: 'Python', color: '#3776AB' },
              { Icon: SiReact, name: 'React', color: '#61DAFB' },
              { Icon: SiFastapi, name: 'FastAPI', color: '#009688' },
              { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
              { Icon: SiMicrosoftazure, name: 'Azure', color: '#0089D6' },
              { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
              { Icon: SiGit, name: 'Git', color: '#F05032' },
              { Icon: SiStreamlit, name: 'Streamlit', color: '#FF4B4B' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center transition-all duration-300 group-hover:border-primary-500/50">
                  <tech.Icon
                    className="w-8 h-8 transition-all duration-300"
                    style={{ color: tech.color }}
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
