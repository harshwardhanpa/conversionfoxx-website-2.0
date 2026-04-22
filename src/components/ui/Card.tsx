import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  id?: string;
}

/**
 * Standardized glassmorphism card component.
 */
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  padding = 'md',
  onClick,
  id,
}) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
    xl: 'p-12 md:p-16',
  }[padding];

  const baseClasses = `bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 relative overflow-hidden ${paddingClasses} ${className}`;
  const hoverClasses = hoverEffect ? 'hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10' : '';

  if (onClick) {
    return (
      <motion.button
        id={id}
        onClick={onClick}
        whileHover={hoverEffect ? { scale: 1.02 } : {}}
        whileTap={hoverEffect ? { scale: 0.98 } : {}}
        className={`${baseClasses} ${hoverClasses} text-left w-full`}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <div id={id} className={`${baseClasses} ${hoverClasses}`}>
      {children}
    </div>
  );
};

export default Card;
