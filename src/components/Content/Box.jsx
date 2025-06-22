import React, { useState } from "react";
import Items from "./Items";

const Box = ({light}) => {
  return (
    <div className="w-full h-auto pb-4 grid md:grid-cols-3 text-white mt-5 gap-3">
      <Items light={light}/>
    </div>
  );
};

export default Box;
