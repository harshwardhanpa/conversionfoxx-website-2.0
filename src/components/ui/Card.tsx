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

  const baseClasses = `glass rounded-[2.5rem] border border-white/5 relative overflow-hidden transition-all duration-500 ${paddingClasses} ${className}`;
  const hoverClasses = hoverEffect ? 'hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-1' : '';

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
