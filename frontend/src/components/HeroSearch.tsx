import React from "react";
import SearchJobInput from "./SearchJobInput";

type Props = {};

const HeroSearch = (props: Props) => {
  return (
    <section className="top-0 flex  items-center justify-center h-screen w-10/12 mx-auto">
      <div>
        <h1 className="font-bold text-8xl text-center">
          Get The <span className="text-primary">Right Job</span> <br></br> You
          Deserve
        </h1>
        <SearchJobInput></SearchJobInput>
      </div>
    </section>
  );
};

export default HeroSearch;
