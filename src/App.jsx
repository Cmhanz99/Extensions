import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Box from "./components/Content/Box";

function App() {
  const [light, setLight] = useState(false);

  return (
    <main
      className={`w-full py-10 flex items-center justify-center 
      ${
        light
          ? "bg-linear-to-t from-slate-800 to-slate-950"
          : "bg-white text-black"
      }`}
    >
      <section className="w-[80%] h-[80%] flex flex-col">
        <Nav light={light} setLight={setLight} />
        <Content light={light}/>
        <Box light={light}/>
      </section>
    </main>
  );
}

export default App;
