import React from "react";
import Inputs from "./Inputs";

const AddModal = ({box, setBox, setOpenModal}) => {
  return (
    <div className="fixed inset w-80 h-auto bg-slate-700 rounded-xl p-4 flex flex-col">
      <h2 className="text-xl text-white font-semibold">Add Notes</h2>
      <Inputs box={box} setBox={setBox} setOpenModal={setOpenModal}/>
    </div>
  );
};


export default AddModal;
