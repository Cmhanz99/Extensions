import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Box from "./components/Content/Box";
import AddButton from "./components/Button/AddButton";
import AddModal from "./components/AddModal/AddModal";
import { data } from "./data/boxdata";

const Section = ({ light, setLight, box }) => (
  <section className="w-[80%] h-[80%] flex flex-col">
    <Nav light={light} setLight={setLight} />
    <Content light={light} />
    <Box light={light} box={box} />
  </section>
);

function App() {
  const [box, setBox] = useState(data);
  const [light, setLight] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  return (
    <main
      className={`w-full py-10 flex items-center justify-center relative
      ${
        light
          ? "bg-linear-to-t from-slate-800 to-slate-950"
          : "bg-white text-black"
      }`}
    >
      <Section light={light} setLight={setLight} box={box} />
      <AddButton openModal={openModal} setOpenModal={setOpenModal} />
      {openModal && (
        <AddModal box={box} setBox={setBox} setOpenModal={setOpenModal} />
      )}
    </main>
  );
}

export default App;
