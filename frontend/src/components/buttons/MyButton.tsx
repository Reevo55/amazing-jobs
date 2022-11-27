import React from "react";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon: React.ReactNode;
  className?: string;
}

const MyButton = ({ className, children, icon, ...props }: MyButtonProps) => {
  return (
    <button
      className={`hover:underline bg-primary text-white px-6 py-2 rounded-lg ${className}`}
      {...props}
    >
      {icon && <i className="icon">{icon}</i>}
      {children}
    </button>
  );
};

export default MyButton;
