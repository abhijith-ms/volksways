import { motion } from 'framer-motion'
import { HiCheckCircle, HiUsers, HiGlobeAlt, HiAcademicCap } from 'react-icons/hi'

const GlassmorphismAbout = () => {
  const features = [
    {
      icon: HiUsers,
      title: "Expert Counselors",
      description: "Our experienced team provides personalized guidance for your academic journey."
    },
    {
      icon: HiGlobeAlt,
      title: "Global Network",
      description: "Strong partnerships with top European universities and institutions."
    },
    {
      icon: HiAcademicCap,
      title: "Proven Success",
      description: "98% success rate in university admissions and visa approvals."
    }
  ]

  const achievements = [
    "500+ students successfully placed in European universities",
    "Partnerships with 100+ top-ranked institutions",
    "15+ years of experience in international education",
    "Comprehensive support from application to graduation"
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl"
        />
        
        {/* Study Abroad Elements */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-32 right-32 text-white/8"
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,3L1,9L12,15L21,11V17H23V9L12,3M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-20 left-16 text-white/6"
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </motion.div>

        {/* Language/Translation Icon */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 right-8 text-white/7"
        >
          <svg width="55" height="55" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"/>
          </svg>
        </motion.div>

        {/* Student/Person Icon */}
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            x: [0, 8, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-1/3 left-8 text-white/8"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
          </svg>
        </motion.div>

        {/* Trophy/Achievement */}
        <motion.div
          animate={{ 
            scale: [1, 1.08, 1],
            y: [0, -8, 0]
          }}
          transition={{ 
            duration: 13, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute top-1/4 left-1/3 text-white/6"
        >
          <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5,16L3,5H5.5L6.5,10L7.5,5H9.5L10.5,10L11.5,5H14L12,16H10L9,11L8,16M15,16L13.5,5H15.5L16.5,10L17.5,5H19.5L21,16H19L18.5,11L17.5,16H15.5L14.5,11L14,16"/>
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-full text-xs font-medium mb-4 border border-white/20"
            >
              <span>About Volksways</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3"
            >
              Your Trusted Partner for{' '}
              <span className="bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent">
                European Education
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-white/80 mb-4"
            >
              Based in Trivandrum, Kerala, India, Volksways is a leading study abroad consultancy specializing in European education. We bridge the gap between ambitious students and world-class universities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-2 mb-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-2"
                >
                  <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-xs">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
            >
              <h3 className="font-semibold text-white mb-2 text-sm">Our Mission</h3>
              <p className="text-white/80 text-xs">
                To empower students from Kerala with world-class European education opportunities, 
                providing comprehensive support throughout their academic journey abroad.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Why Choose Us Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-4 border border-white/20"
            >
              <h3 className="text-base font-semibold text-white mb-2">Why Choose Volksways?</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {['Free Consultation', 'End-to-End Support', 'Visa Assistance', 'Post-Arrival Help'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GlassmorphismAbout