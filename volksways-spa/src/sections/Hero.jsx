import { motion } from 'framer-motion'
import { HiArrowRight, HiGlobeAlt, HiAcademicCap } from 'react-icons/hi'
import AnimatedButton from '../components/AnimatedButton'
import AnimatedText, { AnimatedWords } from '../components/AnimatedText'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* TEST ELEMENT - Remove this once working */}
      <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded z-50">
        NEW DESIGN LOADED ✓
      </div>
      
      {/* Aurora Background - Simplified for testing */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-primary-700/20 animate-pulse" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-primary-50/80 to-white/95" />

      {/* Static decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-100 rounded-full opacity-10" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary-200 rounded-full opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-200 rounded-lg opacity-15 transform rotate-45" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <AnimatedText
              variant="fadeUp"
              delay={0.2}
              className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <HiGlobeAlt className="w-4 h-4" />
              <span>Your Gateway to European Education - ANIMATED</span>
            </AnimatedText>

            <AnimatedText
              variant="fadeUp"
              delay={0.4}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Study in{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Europe</span>
              <br />
              with Confidence
            </AnimatedText>

            <AnimatedText
              variant="fadeUp"
              delay={0.6}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Transform your academic dreams into reality. We guide students from Kerala to prestigious European universities with personalized counseling and comprehensive support.
            </AnimatedText>

            <AnimatedText
              variant="fadeUp"
              delay={0.8}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <AnimatedButton
                variant="primary"
                onClick={scrollToContact}
                icon={HiArrowRight}
              >
                Book Free Consultation - SHIMMER
              </AnimatedButton>
              
              <AnimatedButton
                variant="secondary"
                icon={HiAcademicCap}
              >
                Explore Programs - SHIMMER
              </AnimatedButton>
            </AnimatedText>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Students Placed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <HiAcademicCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">European Universities</h3>
                    <p className="text-gray-600 text-sm">Top-ranked institutions</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Germany</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Netherlands</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">France</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-secondary-100 rounded-lg p-4 shadow-lg">
                <HiGlobeAlt className="w-6 h-6 text-primary-600" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-primary-100 rounded-lg p-4 shadow-lg">
                <span className="text-primary-600 font-semibold text-sm">€0 Tuition</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero