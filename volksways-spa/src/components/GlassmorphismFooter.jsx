import { 
  HiMail,
  HiPhone,
  HiLocationMarker
} from 'react-icons/hi'
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const GlassmorphismFooter = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Study Abroad Counseling',
    'University Admission',
    'Visa Guidance',
    'Career Counseling'
  ]

  const destinations = [
    'Germany',
    'Netherlands',
    'France',
    'Norway',
    'Sweden',
    'Denmark'
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-400' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-300' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-300' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.02, 0.05]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-lg font-bold text-white">Volksways</span>
            </div>
            
            <p className="text-white/80 mb-3 leading-relaxed text-xs">
              Your trusted partner for European education. We guide students from Kerala to prestigious 
              universities across Europe with comprehensive support and personalized counseling.
            </p>

            {/* Contact Info */}
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <HiLocationMarker className="w-3 h-3 text-primary-400 flex-shrink-0" />
                <span className="text-white/80 text-xs">Kochi, Kerala, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiPhone className="w-3 h-3 text-primary-400 flex-shrink-0" />
                <span className="text-white/80 text-xs">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiMail className="w-3 h-3 text-primary-400 flex-shrink-0" />
                <span className="text-white/80 text-xs">info@volksways.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-all duration-200 text-xs hover:translate-x-1"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Our Services</h3>
            <ul className="space-y-1.5">
              {services.map((service, index) => (
                <li key={index} className="text-white/80 text-xs">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Study Destinations</h3>
            <ul className="space-y-1.5">
              {destinations.map((destination, index) => (
                <li key={index} className="text-white/80 text-xs">
                  {destination}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-sm font-semibold text-white mb-1.5">Stay Updated</h3>
            <p className="text-white/80 text-xs mb-3">
              Get the latest updates on study abroad opportunities and application deadlines.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-white/50 text-xs"
              />
              <motion.button
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 px-3 py-1.5 rounded-lg font-semibold text-white transition-colors duration-200 shadow-lg text-xs"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-5xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-xs">
              © 2024 Volksways. All rights reserved. | Privacy Policy | Terms of Service
            </div>

            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-white/60 ${social.color} transition-all duration-200 w-7 h-7 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:border-white/40`}
                >
                  <social.icon className="w-3 h-3" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default GlassmorphismFooter