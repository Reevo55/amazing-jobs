import React from "react";

interface MyCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: React.ReactNode;
}

const MyCheckbox = ({ className, icon, ...props }: MyCheckboxProps) => {
  return (
    <input
      type = "checkbox"
      className={`bg-white  focus:border-primary  border-2 border-gray-300 px-6 py-2 rounded-2xl placeholder-gray-400  ${className}`}
      {...props}
    />
  );
};

export default MyCheckbox;
