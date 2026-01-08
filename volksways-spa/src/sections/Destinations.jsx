import { motion } from 'framer-motion'
import { HiAcademicCap, HiCurrencyEuro, HiGlobeAlt, HiStar } from 'react-icons/hi'
import AnimatedCard from '../components/AnimatedCard'
import AnimatedText from '../components/AnimatedText'
import AnimatedButton from '../components/AnimatedButton'

const Destinations = () => {
  const countries = [
    {
      name: "Germany",
      flag: "🇩🇪",
      universities: "400+",
      tuitionFee: "€0 - €3,000",
      language: "German/English",
      highlights: ["No tuition fees", "Strong economy", "Research opportunities", "Post-study work visa"],
      popular: true,
      gradient: "from-red-500 to-yellow-500"
    },
    {
      name: "Netherlands",
      flag: "🇳🇱",
      universities: "200+",
      tuitionFee: "€2,000 - €15,000",
      language: "Dutch/English",
      highlights: ["High quality education", "English programs", "Innovative teaching", "Multicultural environment"],
      popular: true,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "France",
      flag: "🇫🇷",
      universities: "300+",
      tuitionFee: "€170 - €3,770",
      language: "French/English",
      highlights: ["Low tuition fees", "Cultural diversity", "Research excellence", "EU work opportunities"],
      popular: false,
      gradient: "from-blue-500 to-red-500"
    },
    {
      name: "Norway",
      flag: "🇳🇴",
      universities: "50+",
      tuitionFee: "€0",
      language: "Norwegian/English",
      highlights: ["Free education", "High living standards", "Natural beauty", "Innovation focus"],
      popular: false,
      gradient: "from-blue-600 to-red-600"
    },
    {
      name: "Sweden",
      flag: "🇸🇪",
      universities: "40+",
      tuitionFee: "€0 - €15,000",
      language: "Swedish/English",
      highlights: ["Innovation hub", "Sustainable living", "English programs", "Work-life balance"],
      popular: false,
      gradient: "from-blue-500 to-yellow-500"
    },
    {
      name: "Denmark",
      flag: "🇩🇰",
      universities: "30+",
      tuitionFee: "€6,000 - €16,000",
      language: "Danish/English",
      highlights: ["High happiness index", "Quality education", "Green technology", "Student-friendly"],
      popular: false,
      gradient: "from-red-500 to-white"
    }
  ]

  const stats = [
    { number: "15+", label: "European Countries", icon: HiGlobeAlt },
    { number: "1000+", label: "Partner Universities", icon: HiAcademicCap },
    { number: "€0", label: "Minimum Tuition", icon: HiCurrencyEuro },
    { number: "98%", label: "Visa Success Rate", icon: HiStar }
  ]

  return (
    <section id="destinations" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
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
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <HiGlobeAlt className="w-4 h-4" />
            <span>Study Destinations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Explore Top{' '}
            <span className="text-gradient">European Destinations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <AnimatedCard
              key={index}
              hoverEffect="glow"
              className="relative"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {country.popular && (
                <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  Popular
                </div>
              )}

              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${country.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{country.name}</h3>
                    <p className="text-white/90">{country.universities} Universities</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Tuition Fee</div>
                    <div className="font-semibold text-gray-900">{country.tuitionFee}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Language</div>
                    <div className="font-semibold text-gray-900">{country.language}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Highlights</h4>
                  <div className="space-y-2">
                    {country.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <AnimatedButton
                  variant="secondary"
                  className="w-full"
                >
                  Explore Programs
                </AnimatedButton>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your European Journey?
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Get personalized guidance on choosing the right country and university for your academic goals. 
            Our experts are here to help you every step of the way.
          </p>
          <button className="bg-white text-primary-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200">
            Book Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Destinations