import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-300 transform active:scale-95";

    // Design System Variants
    const variants = {
        primary: "bg-[var(--brand-neon)] text-black hover:bg-[#b0e660] hover:shadow-[0_0_15px_rgba(200,255,128,0.4)] rounded-sm",
        secondary: "border border-gray-600 bg-black/50 text-white hover:bg-white/10 hover:border-white rounded-sm backdrop-blur-sm",
        outline: "border border-[var(--brand-neon)] text-[var(--brand-neon)] hover:bg-[var(--brand-neon)] hover:text-black rounded-sm",
        ghost: "text-gray-400 hover:text-white hover:bg-white/5 rounded-sm"
    };

    const sizeStyles = "px-8 py-3 text-sm md:text-base";

    return (
        <button
            className={`${baseStyles} ${variants[variant] || variants.primary} ${sizeStyles} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
