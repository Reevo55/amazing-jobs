import React from "react";
import ReactDOM from 'react-dom';
import Banner from "./components/Banner";
import suit from "./assets/suit.jpg";

function App() {
  return (
    <>
      <header></header>
      <main className="flex h-screen bg-gradient-to-tr from-zinc-700 to-zinc-900">
        <Banner
          title="Amazing Jobs"
          subtitle="Perfect job is just around the corner"
          link={{
            text: "Find it",
            href: "/jobs",
          }}
        ></Banner>
        <img
          className="absolute h-screen w-screen object-cover z-0 object-top opacity-60"
          src={suit}
          alt="suits"
        ></img>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
