import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

/**
 * Standardized CTA and secondary buttons matching the ConversionFoxx style.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-orange text-white shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 active:scale-95",
    secondary: "glass text-white hover:bg-white/10 active:scale-95",
    ghost: "text-white/60 hover:text-brand-orange hover:bg-white/5 active:scale-95",
    outline: "border border-white/10 text-white hover:border-brand-orange hover:text-brand-orange active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2" />}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
    >
      {content}
    </motion.button>
  );
};

export default Button;
