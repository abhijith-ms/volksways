import { motion } from 'framer-motion'
import { useState } from 'react'

const AnimatedCard = ({ 
  children, 
  className = '',
  hoverEffect = 'lift',
  gradient = false,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const hoverEffects = {
    lift: { y: -8, scale: 1.02 },
    tilt: { rotateX: 5, rotateY: 5, scale: 1.02 },
    glow: { scale: 1.02, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)' },
    subtle: { y: -2, scale: 1.01 }
  }

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300
        ${gradient ? 'bg-gradient-to-br from-white to-gray-50' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={hoverEffects[hoverEffect]}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {/* Subtle border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.1), rgba(29, 78, 216, 0.1), rgba(30, 64, 175, 0.1))',
          padding: '1px'
        }}
      >
        <div className="w-full h-full bg-white rounded-2xl" />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

export default AnimatedCard