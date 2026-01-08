import { motion } from 'framer-motion'
import { 
  HiAcademicCap, 
  HiDocumentText, 
  HiGlobeAlt, 
  HiUserGroup,
  HiArrowRight,
  HiCheckCircle
} from 'react-icons/hi'
import AnimatedCard from '../components/AnimatedCard'
import AnimatedText from '../components/AnimatedText'
import AnimatedButton from '../components/AnimatedButton'

const Services = () => {
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
      color: "from-blue-500 to-blue-600"
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
      color: "from-green-500 to-green-600"
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
      color: "from-purple-500 to-purple-600"
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
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
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
            <span>Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Support for Your{' '}
            <span className="text-gradient">European Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From initial consultation to post-arrival support, we provide end-to-end services 
            to ensure your study abroad journey is smooth and successful.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              hoverEffect="lift"
              className="overflow-hidden"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <service.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + featureIndex * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <AnimatedButton
                  variant="outline"
                  className="w-full"
                  icon={HiArrowRight}
                >
                  Learn More
                </AnimatedButton>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Simple 4-Step Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've streamlined the study abroad process to make it as simple and stress-free as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
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
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services