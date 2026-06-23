import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8", variant = 'icon' }) => {
  return (
    <div className={`flex items-center gap-2 group shrink-0`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M12 2L22 7V17L12 22L2 17V7L12 2Z"
          fill="url(#gradient)"
          stroke="#FF6A00"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 6L17 8.5V15.5L12 18L7 15.5V8.5L12 6Z"
          fill="#1A0F0A"
          stroke="#FF6A00"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2.5" fill="#FF6A00" />
        <defs>
          <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6A00" stopOpacity="0.2" />
            <stop offset="1" stopColor="#E63900" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
      
      {variant === 'full' && (
        <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-brand-primary transition-colors duration-300">
          Conversion<span className="text-brand-primary">Foxx</span>
        </span>
      )}
    </div>
  );
};
