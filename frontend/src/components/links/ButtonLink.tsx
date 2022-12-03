import React from "react";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
  to: string;
  children: string;
};

const ButtonLink = ({ className, to, children }: Props) => {
  return (
    <Link
      to={to}
      className={`hover:underline bg-primary text-white px-6 py-2 rounded-lg ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
