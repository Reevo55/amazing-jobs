import React, { PropsWithChildren } from "react";
import StandardHeader from "../components/headers/StandardHeader";

interface Props {
  className?: string;
}

const DefaultLayout = ({ children, className }: PropsWithChildren<Props>) => (
  <>
    <StandardHeader></StandardHeader>
    <main className={`w-8/12 mt-10 mx-auto ${className}`}>{children}</main>
    <footer></footer>
  </>
);

export default DefaultLayout;
