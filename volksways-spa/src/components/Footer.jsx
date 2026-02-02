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

const Footer = () => {
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
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-600' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-600' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold">Volksways</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for European education. We guide students from Kerala to prestigious 
              universities across Europe with comprehensive support and personalized counseling.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <HiLocationMarker className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Kochi, Kerala, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiPhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 89213 58698</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiMail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@volksways.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Study Destinations</h3>
            <ul className="space-y-3">
              {destinations.map((destination, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {destination}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-6">
              Get the latest updates on study abroad opportunities and application deadlines.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Volksways. All rights reserved. | Privacy Policy | Terms of Service
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer