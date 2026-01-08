import { motion } from 'framer-motion'

const AnimatedText = ({ 
  children, 
  variant = 'fadeUp',
  className = '',
  delay = 0,
  duration = 0.6,
  ...props 
}) => {
  const variants = {
    fadeUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    slideLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={variants[variant].initial}
      animate={variants[variant].animate}
      transition={{ 
        duration, 
        delay,
        ease: 'easeOut'
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedText