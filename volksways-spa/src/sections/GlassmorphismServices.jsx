import { motion } from 'framer-motion'
import { 
  HiAcademicCap, 
  HiDocumentText, 
  HiGlobeAlt, 
  HiUserGroup,
  HiArrowRight,
  HiCheckCircle
} from 'react-icons/hi'

const GlassmorphismServices = () => {
  const services = [
    {
      icon: HiAcademicCap,
      title: "Study Abroad Counseling",
      description: "Personalized guidance to choose the right course and university based on your academic background and career goals.",
      features: [
        "Career assessment and planning",
        "University selection guidance",
        "Course recommendation",
        "Academic pathway planning"
      ],
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: HiDocumentText,
      title: "University Admission Assistance",
      description: "Complete support for university applications, document preparation, and admission process management.",
      features: [
        "Application form assistance",
        "Document preparation",
        "SOP and LOR guidance",
        "Interview preparation"
      ],
      gradient: "from-green-500/20 to-green-600/20"
    },
    {
      icon: HiGlobeAlt,
      title: "Visa Guidance",
      description: "Expert assistance with visa applications, documentation, and interview preparation for European countries.",
      features: [
        "Visa application support",
        "Document verification",
        "Interview coaching",
        "Embassy liaison"
      ],
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: HiUserGroup,
      title: "Course & Career Counseling",
      description: "Professional guidance to align your academic choices with future career opportunities and market demands.",
      features: [
        "Industry trend analysis",
        "Career opportunity mapping",
        "Skill gap assessment",
        "Professional networking"
      ],
      gradient: "from-orange-500/20 to-orange-600/20"
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.03, 0.08]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
        />
        
        {/* Service Related Elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 text-white/6"
        >
          <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            x: [0, 15, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 7
          }}
          className="absolute bottom-1/3 left-1/4 text-white/7"
        >
          <svg width="55" height="55" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
        </motion.div>

        {/* Handshake/Partnership */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/3 left-1/6 text-white/8"
        >
          <svg width="58" height="58" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11,1.07C7.05,1.56 4,4.92 4,9H7L12,4L17,9H20C20,4.92 16.95,1.56 13,1.07V4A1,1 0 0,1 11,4V1.07M4,10V14A1,1 0 0,0 5,15H9A1,1 0 0,0 10,14V10H4M14,10V14A1,1 0 0,0 15,15H19A1,1 0 0,0 20,14V10H14M6,16V20A1,1 0 0,0 7,21H17A1,1 0 0,0 18,20V16H6Z"/>
          </svg>
        </motion.div>

        {/* Clock/Time Management */}
        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/3 text-white/6"
        >
          <svg width="46" height="46" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z"/>
          </svg>
        </motion.div>

        {/* Lightbulb/Ideas */}
        <motion.div
          animate={{ 
            y: [0, -18, 0],
            opacity: [0.06, 0.12, 0.06]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 9
          }}
          className="absolute top-1/6 right-1/6 text-white/8"
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"/>
          </svg>
        </motion.div>

        {/* Target/Goals */}
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 19, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/6 left-1/5 text-white/7"
        >
          <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"/>
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-full text-xs font-medium mb-3 border border-white/20"
          >
            <span>Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3"
          >
            Comprehensive Support for Your{' '}
            <span className="bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent">
              European Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-white/80 max-w-3xl mx-auto"
          >
            From initial consultation to post-arrival support, we provide end-to-end services 
            to ensure your study abroad journey is smooth and successful.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${service.gradient} backdrop-blur-md p-4 border-b border-white/10`}>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-white/80 text-xs">{service.description}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <div className="space-y-1.5 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + featureIndex * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <HiCheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-white/80 text-xs">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group border border-white/20 hover:border-white/40 text-xs"
                >
                  <span>Learn More</span>
                  <HiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-white/5 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10"
        >
          <div className="text-center mb-6">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">
              Our Simple 4-Step Process
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto text-xs">
              We've streamlined the study abroad process to make it as simple and stress-free as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Consultation", desc: "Free initial assessment" },
              { step: "02", title: "Planning", desc: "Customized roadmap" },
              { step: "03", title: "Application", desc: "University & visa process" },
              { step: "04", title: "Success", desc: "Departure & support" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-primary-600 text-white rounded-xl flex items-center justify-center text-sm font-bold mx-auto mb-2 shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-white/80 text-xs">{item.desc}</p>
                
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-0.5 bg-white/20 -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GlassmorphismServices