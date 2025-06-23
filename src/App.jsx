import React, { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Box from "./components/Content/Box";
import AddButton from "./components/Button/AddButton";
import AddModal from "./components/AddModal/AddModal";
import { data } from "./data/boxdata";

const Section = ({ light, setLight, box, setBox }) => (
  <section className="w-[80%] flex flex-col">
    <Nav light={light} setLight={setLight} />
    <Content light={light} />
    <Box light={light} box={box} setBox={setBox} />
  </section>
);

function App() {
  const [box, setBox] = useState(() => {
    const saveData = localStorage.getItem("boxData");
    return saveData ? JSON.parse(saveData) : data;
  });
  const [light, setLight] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("boxData", JSON.stringify(box));
  }, [box]);

  return (
    <main
      className={`w-full h-screen bg-fixed py-10 flex items-center justify-center relative
      ${
        light
          ? "bg-linear-to-t from-slate-800 to-slate-950"
          : "bg-white text-black"
      }`}
    >
      <Section light={light} setLight={setLight} box={box} setBox={setBox} />
      <AddButton openModal={openModal} setOpenModal={setOpenModal} />
      {openModal && (
        <AddModal box={box} setBox={setBox} setOpenModal={setOpenModal} />
      )}
    </main>
  );
}

export default App;
