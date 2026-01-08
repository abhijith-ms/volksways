import { motion } from 'framer-motion'
import { 
  HiAcademicCap, 
  HiDocumentText, 
  HiGlobeAlt, 
  HiCheckCircle,
  HiUserGroup,
  HiCurrencyEuro
} from 'react-icons/hi'

const StudyAbroadProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      subtitle: "Your Journey Begins Here",
      description: "We start with a comprehensive assessment of your academic background, career goals, and preferences to create a personalized study abroad plan.",
      icon: HiUserGroup,
      color: "from-blue-500/20 to-blue-600/20",
      highlights: [
        "Free 1-on-1 consultation",
        "Academic background analysis",
        "Career goal assessment",
        "Country & university preferences"
      ]
    },
    {
      id: 2,
      title: "University Selection",
      subtitle: "Finding Your Perfect Match",
      description: "Based on your profile, we help you select the best universities and programs that align with your academic goals and budget.",
      icon: HiAcademicCap,
      color: "from-green-500/20 to-green-600/20",
      highlights: [
        "Curated university recommendations",
        "Program compatibility analysis",
        "Scholarship opportunities",
        "Application timeline planning"
      ]
    },
    {
      id: 3,
      title: "Application Process",
      subtitle: "Crafting Your Success Story",
      description: "Our experts guide you through every step of the application process, from document preparation to submission.",
      icon: HiDocumentText,
      color: "from-purple-500/20 to-purple-600/20",
      highlights: [
        "Document preparation assistance",
        "SOP and essay writing support",
        "Letter of recommendation guidance",
        "Application submission tracking"
      ]
    },
    {
      id: 4,
      title: "Visa & Financial Planning",
      subtitle: "Securing Your Future",
      description: "We provide comprehensive support for visa applications and help you plan your finances for studying in Europe.",
      icon: HiCurrencyEuro,
      color: "from-orange-500/20 to-orange-600/20",
      highlights: [
        "Visa application assistance",
        "Financial documentation support",
        "Scholarship application help",
        "Pre-departure briefing"
      ]
    },
    {
      id: 5,
      title: "Success & Departure",
      subtitle: "Your European Dream Realized",
      description: "Congratulations! With your acceptance and visa approved, we help you prepare for your new life in Europe.",
      icon: HiCheckCircle,
      color: "from-emerald-500/20 to-emerald-600/20",
      highlights: [
        "Pre-departure orientation",
        "Accommodation assistance",
        "Airport pickup coordination",
        "Ongoing support in Europe"
      ]
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.02, 0.05]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-full text-xs font-medium mb-3 border border-white/20"
          >
            <HiGlobeAlt className="w-3 h-3" />
            <span>Your Study Abroad Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3"
          >
            From Dream to{' '}
            <span className="bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent">
              European Reality
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-white/80 max-w-3xl mx-auto"
          >
            Follow our proven 5-step process that has helped 500+ students successfully transition to European universities. 
            Each step is carefully designed to maximize your chances of success.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-r ${step.color} backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 rounded-xl p-4 md:p-6`}
            >
              <div className="flex items-start space-x-4">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-bold text-white/60">
                      {step.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-primary-300 font-medium text-xs mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-white/70 text-xs">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 bg-gradient-to-r from-primary-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-4 md:p-6 text-center border border-white/20"
        >
          <h3 className="text-lg md:text-xl font-bold text-white mb-2">
            Ready to Start Your Journey?
          </h3>
          <p className="text-white/80 mb-4 max-w-2xl mx-auto text-xs">
            Join hundreds of successful students who have transformed their academic dreams into reality. 
            Book your free consultation today and take the first step towards your European education.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 font-semibold py-2 px-5 rounded-xl hover:bg-white/90 transition-all duration-200 shadow-2xl text-sm"
          >
            Book Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default StudyAbroadProcess