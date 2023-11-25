"use client";
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  arrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  arrow
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      group
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-full
    hover:opacity-80
    transition
    w-[150px]
    float-right
    font-DIN-Bold
    
    ${outline ? "bg-white" : "bg-webBlue"}
    ${outline ? "border-black" : "border-webBlue"}
    ${outline ? "text-webBlue" : "text-white"}
    ${small ? " py-3" : "py-1"}
    ${small ? "text-sm text-webBlue" : "text-lg"}
    ${small ? "font-light" : "font-semibold"}
    ${small ? "border-[0.8px]" : "border-2"}
    `}
    >
      <span className="flex justify-evenly items-center">
        {label}
        {arrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3.5"
            stroke="currentColor"
            className="w-3 h-3 group-hover:translate-x-1 transition"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

export default Button;
