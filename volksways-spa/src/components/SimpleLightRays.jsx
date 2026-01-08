import { useRef, useEffect, useState } from 'react';

const SimpleLightRays = ({ 
  raysColor = "#2563eb", 
  className = "",
  opacity = 0.3 
}) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePos({ x, y });
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

  return (
    <div 
      ref={containerRef}
      className={`w-full h-full absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {/* CSS-based animated light rays */}
      <div className="absolute inset-0">
        {/* Main center ray */}
        <div 
          className="absolute top-0 w-1 h-full origin-top transition-transform duration-1000 ease-out"
          style={{
            left: `${mousePos.x * 100}%`,
            background: `linear-gradient(to bottom, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4), transparent)`,
            transform: `translateX(-50%) rotate(${(mousePos.x - 0.5) * 10}deg)`
          }}
        />
        
        {/* Side rays */}
        {[-60, -40, -20, 20, 40, 60].map((offset, index) => (
          <div
            key={index}
            className="absolute top-0 w-0.5 h-full origin-top transition-all duration-1000 ease-out"
            style={{
              left: `${(mousePos.x * 100) + offset}%`,
              background: `linear-gradient(to bottom, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.2 - Math.abs(offset) * 0.002}), transparent)`,
              transform: `translateX(-50%) rotate(${(mousePos.x - 0.5) * 5 + offset * 0.1}deg)`,
              height: `${100 - Math.abs(offset) * 0.5}%`
            }}
          />
        ))}
        
        {/* Wider spread rays */}
        {[-100, -80, 80, 100].map((offset, index) => (
          <div
            key={`wide-${index}`}
            className="absolute top-0 w-0.5 h-3/4 origin-top transition-all duration-1500 ease-out"
            style={{
              left: `${(mousePos.x * 100) + offset}%`,
              background: `linear-gradient(to bottom, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1), transparent)`,
              transform: `translateX(-50%) rotate(${(mousePos.x - 0.5) * 3 + offset * 0.05}deg)`
            }}
          />
        ))}
        
        {/* Animated glow effect */}
        <div 
          className="absolute top-0 w-32 h-32 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePos.x * 100}%`,
            background: `radial-gradient(circle, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15), transparent)`,
            transform: 'translateX(-50%)'
          }}
        />
      </div>
      
      {/* Pulsing overlay */}
      <div 
        className="absolute inset-0 animate-pulse"
        style={{
          background: `radial-gradient(ellipse at ${mousePos.x * 100}% 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05), transparent 70%)`
        }}
      />
    </div>
  );
};

export default SimpleLightRays;