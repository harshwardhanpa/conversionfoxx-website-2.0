import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", variant = 'icon' }) => {
  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      <img 
        src="/logo.png" 
        alt="ConversionFoxx Logo" 
        width="48"
        height="48"
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
      />
      
      {variant === 'full' && (
        <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-brand-primary transition-colors duration-300">
          Conversion<span className="text-brand-primary">Foxx</span>
        </span>
      )}
    </div>
  );
};
