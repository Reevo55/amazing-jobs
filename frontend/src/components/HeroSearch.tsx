import React from "react";
import SearchJobInput from "./SearchJobInput";

type Props = {};

const HeroSearch = (props: Props) => {
  return (
    <section className="top-0 flex items-center justify-center w-10/12 h-screen mx-auto">
      <div>
        <h1 className="font-bold text-center text-8xl">
          Get The <span className="text-primary">Right Job</span> <br></br> You
          Deserve
        </h1>
        <SearchJobInput className="mt-8"></SearchJobInput>
      </div>
    </section>
  );
};

export default HeroSearch;
