import React from "react";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: React.ReactNode;
}

const MyInput = ({ className, icon, ...props }: MyInputProps) => {
  return (
    <input
      className={`bg-white  focus:border-primary  border-2 border-gray-300 px-6 py-2 rounded-2xl placeholder-gray-400  ${className}`}
      {...props}
    />
  );
};

export default MyInput;
