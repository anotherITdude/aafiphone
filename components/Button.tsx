"use client";
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-full
    hover:opacity-80
    transition
    w-[200px]
    float-right
    font-neosans-regular
    ${outline ? "bg-white" : "bg-[#002E6D]"}
    ${outline ? "border-black" : "border-[#002E6D]"}
    ${outline ? "text-black" : "text-white"}
    ${small ? "py-0" : "py-1"}
    ${small ? "text-sm" : "text-lg"}
    ${small ? "font-light" : "font-semibold"}
    ${small ? "border-[1px]" : "border-2"}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
