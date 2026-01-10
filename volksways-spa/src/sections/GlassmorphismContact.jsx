import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiClock,
  HiCheckCircle,
  HiExclamationCircle
} from 'react-icons/hi'

const GlassmorphismContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
    resume: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const destinations = [
    'Portugal',
    'Germany',
    'Malta',
    'Spain',
    'Austria',
    'France',
    'Belgium',
    'Lithuania',
    'Latvia',
    'Slovenia',
    'Other European Country'
  ]

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: "Visit Us",
      details: ["Trivandrum, Kerala, India", "Multiple locations across Kerala"],
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: HiPhone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      gradient: "from-green-500/20 to-green-600/20"
    },
    {
      icon: HiMail,
      title: "Email Us",
      details: ["info@volksways.com"],
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: HiClock,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: By Appointment"],
      gradient: "from-orange-500/20 to-orange-600/20"
    }
  ]

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // File size validation (5MB limit)
    if (formData.resume && formData.resume.size > 5 * 1024 * 1024) {
      alert('Please upload a file smaller than 5MB')
      setIsSubmitting(false)
      return
    }

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      
      // Add form fields
      submitData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY')
      submitData.append('name', formData.name)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('destination', formData.destination || 'Not specified')
      submitData.append('message', formData.message || 'No additional message')
      submitData.append('subject', `New Consultation Request from ${formData.name}`)
      submitData.append('from_name', 'Volksways Website')
      submitData.append('to_name', 'Volksways Team')
      
      // Add file if present
      if (formData.resume) {
        submitData.append('resume', formData.resume)
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData // Don't set Content-Type header for FormData
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          message: '',
          resume: null
        })
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]')
        if (fileInput) fileInput.value = ''
      } else {
        console.error('Form submission error:', result)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Network error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
            duration: 16, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.03, 0.08]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"
        />

        {/* Communication Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/6 right-1/6 text-white/7"
        >
          <svg width="55" height="55" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"/>
          </svg>
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 15, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-1/3 right-1/5 text-white/6"
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
          </svg>
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 28, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/5 text-white/8"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
          </svg>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -18, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ 
            duration: 19, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-1/6 left-1/3 text-white/7"
        >
          <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z"/>
          </svg>
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 22, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 17, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-2/3 right-1/3 text-white/6"
        >
          <svg width="46" height="46" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z"/>
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white/90 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/20"
          >
            <HiMail className="w-5 h-5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Book Your{' '}
            <span className="bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent">
              Free Consultation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 max-w-3xl mx-auto"
          >
            Ready to take the first step towards your European education? 
            Get in touch with our expert counselors for personalized guidance.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 mb-6 flex items-center space-x-3"
              >
                <HiCheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-300 text-sm">Thank you! We'll get back to you within 24 hours.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-lg p-4 mb-6 flex items-center space-x-3"
              >
                <HiExclamationCircle className="w-5 h-5 text-red-400" />
                <div className="text-red-300 text-sm">
                  <p>Please check your information and try again. Make sure all required fields are filled correctly.</p>
                  {formData.resume && (
                    <p className="mt-1 text-xs">
                      Note: File uploads require Web3Forms PRO plan. The form will submit without the file attachment.
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 text-white placeholder-white/50 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 text-white placeholder-white/50 text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 text-white placeholder-white/50 text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-white/90 mb-2">
                    Preferred Study Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 text-white text-sm"
                  >
                    <option value="" className="bg-gray-800">Select a destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest} className="bg-gray-800">{dest}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 text-white placeholder-white/50 text-sm"
                  placeholder="Tell us about your study abroad goals..."
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-white/90 mb-2">
                  Resume/CV (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white/20 file:text-white hover:file:bg-white/30 text-sm"
                  />
                  <p className="text-xs text-white/60 mt-1">
                    Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)
                  </p>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 text-lg ${
                  isSubmitting
                    ? 'bg-white/20 cursor-not-allowed text-white/50'
                    : 'bg-white text-gray-900 hover:bg-white/90 shadow-2xl hover:shadow-white/20'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-white/80 mb-8 text-lg">
                Have questions? We're here to help! Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`bg-gradient-to-r ${info.gradient} backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-lg">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-white/80 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <h4 className="font-semibold text-white mb-3 text-lg">Need Immediate Assistance?</h4>
              <p className="text-white/80 text-sm mb-4">
                Call us directly for urgent queries or to schedule an immediate consultation.
              </p>
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg text-sm hover:bg-white/90 transition-all duration-200 shadow-lg"
              >
                Call Now: +91 98765 43210
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GlassmorphismContact