import React, { useState } from "react";
import Items from "./Items";

const Box = ({ light, box, setBox }) => {
  return (
    <div className="w-full h-auto pb-4 grid md:grid-cols-3 text-white mt-5 gap-3">
      {box.length === 0 ? (
        <div className="text-2xl font-semi-bold text-center mt-20 col-span-3">No notes available!</div>
      ) : (
        <Items light={light} box={box} setBox={setBox} />
      )}
    </div>
  );
};

export default Box;
