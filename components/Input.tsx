"use client";
import { RefObject } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type: string;
  number?: boolean;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors | any;
  //ref?: RefObject<HTMLInputElement> | null;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        {...(type === "file"
          ? {
              accept: "image/jpeg, image/png",
              multiple: true,
            }
          : "")}
        disabled={disabled}
        {...register(id)}
        placeholder=" "
        type={type}
        className={`
          peer
          w-full
          pb-3
          pt-6 
          font-DINCondensed-Bold
          text-sm
          bg-white 
          border-b-2
          rounded-none
          
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${errors[id] ? "border-rose-500" : "border-[#052C6F]"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
      <label
        className={`
          absolute 
          text-lg
          duration-150 
          transform
          -translate-y-3 
          font-DINCondensed-Bold
          tracking-widest
          top-5 
          z-10 
          origin-[0] 
          left-0
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? "text-rose-500" : "text-[#052C6F]"}
        `}
      >
        {errors[id] ? (
          <span className="uppercase text-xs">{errors[id]?.message}</span>
        ) : (
          label
        )}
      </label>
      <span className="text-xs ml-5 text-red-500 animate-pulse"></span>
    </div>
  );
};

export default Input;
