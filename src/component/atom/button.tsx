import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  href: string;
  startIcon?: React.ReactNode;
}

const Button = ({ label, href, startIcon }: ButtonProps) => {
  return (
    <Link href={href}>
      <div className="flex justify-center items-center gap-2 rounded-2xl bg-emerald-700 w-fit min-w-24 px-4 py-0.5">
        {startIcon && startIcon}
        <button className="">{label}</button>
      </div>
    </Link>
  );
};

export default Button;
