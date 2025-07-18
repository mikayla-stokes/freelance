// components/ui/button.tsx
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  className?: string;
};

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
