"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const MotionLink = motion.create(Link);
const hover = { scale: 1.03, y: -1, transition: { type: "spring", stiffness: 100, damping: 20 } } as const;
const tap = { scale: 0.98, transition: { type: "spring", stiffness: 100, damping: 20 } } as const;

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent-600 to-accent-700 text-white shadow-lg shadow-accent-600/25 hover:shadow-accent-500/40 hover:from-accent-500 hover:to-accent-600",
  secondary:
    "bg-white text-navy-900 hover:bg-slate-100 shadow-lg shadow-black/5",
  ghost:
    "bg-white/5 text-white ring-1 ring-inset ring-white/15 hover:bg-white/10 hover:ring-white/25",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[background-color,box-shadow,color] duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <MotionLink href={href} className={classes} whileHover={hover} whileTap={tap}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={disabled ? undefined : hover}
      whileTap={disabled ? undefined : tap}
    >
      {children}
    </motion.button>
  );
}
