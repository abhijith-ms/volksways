import { useRef, useEffect, useState } from 'react';

const ReactBitsLightRays = ({ 
  raysColor = "#2563eb", 
  className = "",
  opacity = 0.6,
  intensity = 1.0 
}) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.3 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      // Smooth mouse movement
      setMousePos(prev => ({
        x: prev.x + (x - prev.x) * 0.1,
        y: prev.y + (y - prev.y) * 0.1
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 37, g: 99, b: 235 };
  };

  const rgb = hexToRgb(raysColor);
  const centerX = mousePos.x * 100;
  const centerY = mousePos.y * 100;

  return (
    <div 
      ref={containerRef}
      className={`w-full h-full absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {/* Main radial light rays */}
      <div className="absolute inset-0">
        {/* Central bright glow */}
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${centerX}%`,
            top: `${centerY}%`,
            background: `radial-gradient(circle, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.4 * intensity}), rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.1 * intensity}) 40%, transparent 70%)`,
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Intense center core */}
        <div 
          className="absolute w-32 h-32 rounded-full blur-xl transition-all duration-1000 ease-out"
          style={{
            left: `${centerX}%`,
            top: `${centerY}%`,
            background: `radial-gradient(circle, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.8 * intensity}), rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.3 * intensity}) 50%, transparent)`,
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Radial light rays */}
        {Array.from({ length: 24 }, (_, i) => {
          const angle = (i * 15) + (mousePos.x - 0.5) * 30; // 24 rays, 15 degrees apart
          const length = 100 + Math.sin(i * 0.5) * 20; // Varying lengths
          const opacity = 0.3 + Math.sin(i * 0.3) * 0.2; // Varying opacity
          
          return (
            <div
              key={i}
              className="absolute origin-bottom transition-all duration-1000 ease-out"
              style={{
                left: `${centerX}%`,
                top: `${centerY}%`,
                width: '2px',
                height: `${length}%`,
                background: `linear-gradient(to top, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity * intensity}), transparent)`,
                transform: `translate(-50%, 0) rotate(${angle}deg)`,
                filter: 'blur(1px)'
              }}
            />
          );
        })}

        {/* Secondary wider rays */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30) + (mousePos.y - 0.5) * 20; // 12 wider rays
          const length = 80 + Math.cos(i * 0.4) * 15;
          
          return (
            <div
              key={`wide-${i}`}
              className="absolute origin-bottom transition-all duration-1500 ease-out"
              style={{
                left: `${centerX}%`,
                top: `${centerY}%`,
                width: '4px',
                height: `${length}%`,
                background: `linear-gradient(to top, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.2 * intensity}), transparent 60%)`,
                transform: `translate(-50%, 0) rotate(${angle}deg)`,
                filter: 'blur(2px)'
              }}
            />
          );
        })}

        {/* Outer glow ring */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full transition-all duration-1000 ease-out"
          style={{
            left: `${centerX}%`,
            top: `${centerY}%`,
            background: `radial-gradient(circle, transparent 30%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.1 * intensity}) 50%, transparent 80%)`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(4px)'
          }}
        />

        {/* Animated pulse effect */}
        <div 
          className="absolute w-64 h-64 rounded-full animate-pulse transition-all duration-1000 ease-out"
          style={{
            left: `${centerX}%`,
            top: `${centerY}%`,
            background: `radial-gradient(circle, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.2 * intensity}), transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(8px)',
            animationDuration: '3s'
          }}
        />
      </div>

      {/* Overlay gradient for depth */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(ellipse at ${centerX}% ${centerY}%, transparent 20%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.3) 100%)`
        }}
      />
    </div>
  );
};

export default ReactBitsLightRays;