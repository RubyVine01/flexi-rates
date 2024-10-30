import { ReactNode, MouseEventHandler } from "react";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

export default function CustomButton({
  children,
  onClick,
  disabled = false,
  className = "",
}: CustomButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`font-rubik px-28 py-7 bg-redAccent text-white rounded-60px uppercase text-xl font-medium leading-5 hover:scale-105 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
