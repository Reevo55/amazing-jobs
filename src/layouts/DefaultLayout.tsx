import React from "react";
import StandardHeader from "../components/headers/StandardHeader";

interface Props {
  children?: JSX.Element;
}

const DefaultLayout: React.FC<Props> = ({ children }) => (
  <>
    <StandardHeader></StandardHeader>
    <main>{children}</main>
    <footer></footer>
  </>
);

export default DefaultLayout;
