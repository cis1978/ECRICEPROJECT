import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  href: string;
  startIcon?: React.ReactNode;
  className?: string;
}

const Button = ({ label, href, startIcon, className }: ButtonProps) => {
  return (
    <Link href={href}>
      <div
        className={`flex justify-center items-center gap-2 rounded-2xl bg-emerald-700 w-fit min-w-24 px-4 py-0.5 ${className}`}>
        {startIcon && startIcon}
        <button>{label}</button>
      </div>
    </Link>
  );
};

export default Button;
