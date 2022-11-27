import React from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: string;
};

const StandardLink = ({ to, children }: Props) => {
  return (
    <Link to={to} className="hover:underline font-medium">
      {children}
    </Link>
  );
};

export default StandardLink;
