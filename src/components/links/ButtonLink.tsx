import React from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: string;
};

const ButtonLink = ({ to, children }: Props) => {
  return (
    <Link
      to={to}
      className="hover:underline bg-primary text-white px-6 py-2 rounded-lg"
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
