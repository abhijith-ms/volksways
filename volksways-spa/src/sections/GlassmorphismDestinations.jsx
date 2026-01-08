import { motion } from 'framer-motion'
import { HiAcademicCap, HiCurrencyEuro, HiGlobeAlt, HiStar } from 'react-icons/hi'

const GlassmorphismDestinations = () => {
  const countries = [
    {
      name: "Portugal",
      flag: "🇵🇹",
      universities: "50+",
      tuitionFee: "€1,000 - €7,000",
      language: "Portuguese/English",
      highlights: ["Golden Visa program", "Affordable living costs", "Beautiful coastline", "Growing tech sector"],
      popular: true,
      gradient: "from-green-500/20 to-red-500/20"
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      universities: "400+",
      tuitionFee: "€0 - €3,000",
      language: "German/English",
      highlights: ["No tuition fees", "Strong economy", "Research opportunities", "Post-study work visa"],
      popular: true,
      gradient: "from-red-500/20 to-yellow-500/20"
    },
    {
      name: "Malta",
      flag: "🇲🇹",
      universities: "10+",
      tuitionFee: "€10,000 - €15,000",
      language: "English/Maltese",
      highlights: ["English-speaking", "EU membership", "Mediterranean climate", "Small class sizes"],
      popular: true,
      gradient: "from-red-500/20 to-white/10"
    },
    {
      name: "Spain",
      flag: "🇪🇸",
      universities: "80+",
      tuitionFee: "€750 - €2,500",
      language: "Spanish/English",
      highlights: ["Low tuition fees", "Rich culture", "Excellent climate", "Growing job market"],
      popular: false,
      gradient: "from-red-500/20 to-yellow-500/20"
    },
    {
      name: "Austria",
      flag: "🇦🇹",
      universities: "70+",
      tuitionFee: "€726 - €1,500",
      language: "German/English",
      highlights: ["High quality education", "Central Europe location", "Strong research focus", "Cultural heritage"],
      popular: false,
      gradient: "from-red-500/20 to-white/10"
    },
    {
      name: "France",
      flag: "🇫🇷",
      universities: "300+",
      tuitionFee: "€170 - €3,770",
      language: "French/English",
      highlights: ["Low tuition fees", "Cultural diversity", "Research excellence", "EU work opportunities"],
      popular: false,
      gradient: "from-blue-500/20 to-red-500/20"
    },
    {
      name: "Belgium",
      flag: "🇧🇪",
      universities: "60+",
      tuitionFee: "€835 - €4,175",
      language: "Dutch/French/English",
      highlights: ["EU headquarters", "Multilingual environment", "High living standards", "Central location"],
      popular: false,
      gradient: "from-yellow-500/20 to-red-500/20"
    },
    {
      name: "Lithuania",
      flag: "🇱🇹",
      universities: "40+",
      tuitionFee: "€1,000 - €5,000",
      language: "Lithuanian/English",
      highlights: ["Affordable education", "Growing economy", "EU membership", "Tech innovation hub"],
      popular: false,
      gradient: "from-yellow-500/20 to-green-500/20"
    },
    {
      name: "Latvia",
      flag: "🇱🇻",
      universities: "30+",
      tuitionFee: "€1,500 - €9,000",
      language: "Latvian/English",
      highlights: ["EU member state", "Digital innovation", "Affordable living", "Quality education"],
      popular: false,
      gradient: "from-red-500/20 to-white/10"
    },
    {
      name: "Slovenia",
      flag: "🇸🇮",
      universities: "20+",
      tuitionFee: "€2,000 - €5,000",
      language: "Slovenian/English",
      highlights: ["Beautiful nature", "Safe environment", "EU membership", "Growing economy"],
      popular: false,
      gradient: "from-blue-500/20 to-red-500/20"
    }
  ]

  const stats = [
    { number: "15+", label: "European Countries", icon: HiGlobeAlt },
    { number: "1000+", label: "Partner Universities", icon: HiAcademicCap },
    { number: "€0", label: "Minimum Tuition", icon: HiCurrencyEuro },
    { number: "98%", label: "Visa Success Rate", icon: HiStar }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        />
        
        {/* Europe Map Background */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/5"
        >
          <svg width="400" height="300" viewBox="0 0 400 300" fill="currentColor">
            <path d="M80,120 Q90,100 120,110 Q150,80 180,90 Q220,60 250,75 Q290,70 320,85 Q350,90 340,120 Q360,150 330,165 Q320,190 290,180 Q260,200 230,185 Q200,210 170,195 Q140,220 120,200 Q90,210 85,180 Q60,160 70,140 Q50,125 80,120 Z"/>
            <circle cx="150" cy="140" r="3" opacity="0.6"/>
            <circle cx="200" cy="120" r="2" opacity="0.4"/>
            <circle cx="250" cy="135" r="2.5" opacity="0.5"/>
            <circle cx="180" cy="160" r="2" opacity="0.4"/>
            <circle cx="220" cy="155" r="2" opacity="0.3"/>
          </svg>
        </motion.div>

        {/* Train/Transportation */}
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 left-1/6 text-white/7"
        >
          <svg width="65" height="65" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2C8,2 4,2.5 4,6V15.5A3.5,3.5 0 0,0 7.5,19L6,20.5V21H7.5L9,19.5H15L16.5,21H18V20.5L16.5,19A3.5,3.5 0 0,0 20,15.5V6C20,2.5 16.42,2 12,2M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17M6,7V11H18V7H6Z"/>
          </svg>
        </motion.div>

        {/* Castle/Historic Building */}
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 17, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute top-1/4 right-1/5 text-white/6"
        >
          <svg width="58" height="58" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,11H4V9H6V11H8V9H10V11H12V9H14V11H16V9H18V11H20V9H22V11H24V13H22V20H20V13H18V20H16V13H14V20H12V13H10V20H8V13H6V20H4V13H2V11M12,1L10.5,6H13.5L12,1Z"/>
          </svg>
        </motion.div>

        {/* Mountain/Landscape */}
        <motion.div
          animate={{ 
            scale: [1, 1.08, 1],
            opacity: [0.04, 0.08, 0.04]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 12
          }}
          className="absolute top-1/3 left-1/4 text-white/5"
        >
          <svg width="75" height="75" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z"/>
          </svg>
        </motion.div>

        {/* Currency/Euro Symbol */}
        <motion.div
          animate={{ 
            rotate: [0, 15, 0],
            y: [0, -15, 0]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-1/3 right-1/4 text-white/8"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.07,11H9.5C9.5,9.95 10.36,9.12 11.5,9.12C12.64,9.12 13.5,9.95 13.5,11C13.5,12.05 12.64,12.88 11.5,12.88H10V14.38H11.5C12.64,14.38 13.5,15.21 13.5,16.25C13.5,17.29 12.64,18.12 11.5,18.12C10.36,18.12 9.5,17.29 9.5,16.25H7.07C7.07,18.39 8.79,20.12 11.5,20.12C14.21,20.12 15.93,18.39 15.93,16.25C15.93,14.96 15.25,13.81 14.21,13.19C15.25,12.56 15.93,11.42 15.93,10.12C15.93,7.98 14.21,6.25 11.5,6.25C8.79,6.25 7.07,7.98 7.07,10.12H9.5C9.5,9.08 10.36,8.25 11.5,8.25C12.64,8.25 13.5,9.08 13.5,10.12C13.5,11.16 12.64,12 11.5,12H10V10.5H11.5C12.64,10.5 13.5,11.33 13.5,12.38C13.5,13.42 12.64,14.25 11.5,14.25H10V12.75H11.5C10.36,12.75 9.5,11.92 9.5,10.88H7.07V11Z"/>
          </svg>
        </motion.div>

        {/* Bridge/Architecture */}
        <motion.div
          animate={{ 
            x: [0, 25, 0],
            scale: [1, 1.06, 1]
          }}
          transition={{ 
            duration: 21, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute top-2/3 left-1/3 text-white/6"
        >
          <svg width="62" height="62" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7,14H9V16H7V14M11,14H13V16H11V14M15,14H17V16H15V14M2,20V18H4V17A2,2 0 0,1 6,15H18A2,2 0 0,1 20,17V18H22V20H20V21A1,1 0 0,1 19,22H5A1,1 0 0,1 4,21V20H2M6,17V18H18V17H6M12,2L8,6V8H16V6L12,2Z"/>
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
            <HiGlobeAlt className="w-5 h-5" />
            <span>Study Destinations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Explore Top{' '}
            <span className="bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent">
              European Destinations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 max-w-3xl mx-auto"
          >
            Discover world-class education opportunities across Europe with affordable tuition fees, 
            excellent quality of life, and promising career prospects.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden group relative"
            >
              {/* Popular Badge */}
              {country.popular && (
                <div className="absolute top-4 right-4 bg-green-400/20 backdrop-blur-sm text-green-300 text-sm font-semibold px-3 py-1 rounded-full z-10 border border-green-400/30">
                  Popular
                </div>
              )}

              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${country.gradient} backdrop-blur-md p-6 border-b border-white/10`}>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{country.name}</h3>
                    <p className="text-white/80 text-sm">{country.universities} Universities</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-white/60 mb-2">Tuition Fee</div>
                    <div className="font-semibold text-white text-sm">{country.tuitionFee}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-2">Language</div>
                    <div className="font-semibold text-white text-sm">{country.language}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3 text-sm">Key Highlights</h4>
                  <div className="space-y-2">
                    {country.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <span className="text-sm text-white/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40 text-sm"
                >
                  Explore Programs
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-8 md:p-12 text-center border border-white/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your European Journey?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
            Get personalized guidance on choosing the right country and university for your academic goals. 
            Our experts are here to help you every step of the way.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-white/90 transition-all duration-200 shadow-2xl text-lg"
          >
            Book Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default GlassmorphismDestinations