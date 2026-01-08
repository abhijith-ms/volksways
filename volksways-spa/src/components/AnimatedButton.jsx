import { useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  icon: Icon,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const variants = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-secondary-100 hover:bg-secondary-200 text-primary-700 border border-secondary-300",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
  }

  return (
    <motion.button
      className={`relative overflow-hidden font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group ${variants[variant]} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      {Icon && (
        <Icon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
      )}
    </motion.button>
  )
}

export default AnimatedButton