import { motion } from 'framer-motion'
import { HiArrowRight, HiGlobeAlt } from 'react-icons/hi'
import LightRays from '../components/LightRays'
import GradientText from '../components/GradientText'

const GlassmorphismHero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      
      {/* LightRays Background - Exact ReactBits Configuration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Fallback gradient while LightRays loads */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />
        <LightRays
          raysOrigin="top-center"
          raysColor="#2563eb"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
        />
      </div>

      {/* Floating Study Abroad Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Airplane 1 - Top Right */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-20 text-white/10"
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </motion.div>

        {/* Airplane 2 - Bottom Left */}
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 40, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-32 left-16 text-white/8"
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </motion.div>

        {/* Europe Map Outline - Center Right */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 right-10 transform -translate-y-1/2 text-white/8"
        >
          <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
            <path d="M20,30 Q25,25 35,28 Q45,20 55,25 Q65,15 75,20 Q85,25 80,35 Q85,45 75,50 Q70,60 60,55 Q50,65 40,60 Q30,70 25,60 Q15,50 20,40 Q15,35 20,30 Z"/>
          </svg>
        </motion.div>

        {/* Graduation Cap - Top Left */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-24 left-20 text-white/10"
        >
          <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18M12,3L1,9L12,15L21,11V17H23V9L12,3Z"/>
          </svg>
        </motion.div>

        {/* Globe - Bottom Right */}
        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute bottom-40 right-32 text-white/8"
        >
          <svg width="55" height="55" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
          </svg>
        </motion.div>

        {/* Passport/Document - Middle Left */}
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white/9"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
        </motion.div>

        {/* University Building - Top Center */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-16 left-1/2 transform -translate-x-1/2 text-white/7"
        >
          <svg width="65" height="65" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A1.25,1.25 0 0,1 13.25,10A1.25,1.25 0 0,1 12,11.25A1.25,1.25 0 0,1 10.75,10A1.25,1.25 0 0,1 12,8.75M7,13H9V18H7V13M11,13H13V18H11V13M15,13H17V18H15V13Z"/>
          </svg>
        </motion.div>

        {/* Suitcase - Bottom Center */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/8"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8,7V5A2,2 0 0,1 10,3H14A2,2 0 0,1 16,5V7H19A1,1 0 0,1 20,8V19A2,2 0 0,1 18,21H6A2,2 0 0,1 4,19V8A1,1 0 0,1 5,7H8M10,5V7H14V5H10Z"/>
          </svg>
        </motion.div>

        {/* Books Stack - Left Center */}
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            x: [0, 8, 0]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute top-1/3 left-12 text-white/9"
        >
          <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.68 6.5,20.68C8.45,20.68 10.55,21.1 12,22C13.35,21.15 15.8,20.68 17.5,20.68C19.15,20.68 20.85,20.9 22.25,21.56C22.35,21.61 22.4,21.66 22.5,21.66C22.75,21.66 23,21.41 23,21.16V6.5C22.4,6.05 21.75,5.75 21,5.5V19.65C19.9,19.2 18.7,19 17.5,19C15.8,19 14.35,19.3 13,19.65V8.5C11.55,7.85 9.45,7.5 7.5,7.5C6.5,7.5 5.55,7.65 4.75,7.85V6.5C5.05,6.35 5.5,6.2 6.5,5Z"/>
          </svg>
        </motion.div>

        {/* European Flag - Right Center */}
        <motion.div
          animate={{ 
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 12
          }}
          className="absolute top-2/3 right-16 text-white/7"
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4,15V9H6L7,10L8,9H20V15H8L7,14L6,15H4M6,11V13H7.5L8.5,12L7.5,11H6M10,11V13H12V11H10M14,11V13H16V11H14M18,11V13H20V11H18Z"/>
          </svg>
        </motion.div>

        {/* Compass - Top Right Corner */}
        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute top-32 right-8 text-white/6"
        >
          <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8L14,12L12,16L10,12L12,8Z"/>
          </svg>
        </motion.div>

        {/* Certificate/Diploma - Bottom Left */}
        <motion.div
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 17, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 9
          }}
          className="absolute bottom-16 left-24 text-white/8"
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,21L15,20L17,21V14H13M17,9V7L15,6L13,7V9L15,10M4,3C2.89,3 2,3.89 2,5V15A2,2 0 0,0 4,17H11V15H4V5H20V15H19V17H20A2,2 0 0,0 22,15V5C22,3.89 21.1,3 20,3H4Z"/>
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-full text-xs font-medium mb-4 border border-white/20"
        >
          <HiGlobeAlt className="w-3 h-3" />
          <span>Your Gateway to European Education</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight"
        >
          Study in <GradientText
            colors={['#8b5cf6', '#ec4899', '#3b82f6', '#8b5cf6']}
            animationSpeed={4}
            direction="horizontal"
            pauseOnHover={true}
            showBorder={true}
            className="inline-block"
          >Europe</GradientText>,
          <br />
          <span className="bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent">
            with Confidence
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          Transform your academic dreams into reality. We guide students from Kerala to prestigious European universities.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
        >
          <motion.button
            onClick={scrollToContact}
            className="bg-white text-gray-900 font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:bg-white/90 shadow-xl hover:shadow-white/20 flex items-center space-x-2 text-sm"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Started</span>
            <HiArrowRight className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            className="bg-white/10 backdrop-blur-md text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:bg-white/20 border border-white/20 hover:border-white/40 text-sm"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
        >
          {[
            { number: '500+', label: 'Students Placed' },
            { number: '15+', label: 'Countries' },
            { number: '98%', label: 'Success Rate' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            >
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-xs text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default GlassmorphismHero