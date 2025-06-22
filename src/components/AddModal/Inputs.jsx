import React, { useState } from "react";
import ActionButton from "./ActionButton";
import { data } from "../../data/boxdata";

const Inputs = ({box, setBox, setOpenModal}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const AddNotes = (e) => {
    e.preventDefault();
    const newNotes = {
      id: data.length + 1,
      title: title,
      desc: description,
      color: color,
      isActive: false
    }

    setBox([...box, newNotes]);
    setTitle("");
    setDescription("");
    setOpenModal(false);
  }

  return (
    <form onSubmit={AddNotes} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 mt-3 text-white">
        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          className="border border-white/60 rounded p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <label>Description</label>
        <textarea
          placeholder="Description..."
          className="border border-white/60 resize-none rounded p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <select 
        className="w-full p-2 border border-white/60 bg-white outline-none rounded"
        onChange={(e) => setColor(e.target.value)}>
          <option selected disabled>Select Color</option>
          <option value="bg-slate-500">Blue</option>
          <option value="bg-pink-500">Pink</option>
          <option value="bg-orange-200">Orange</option>
          <option value="bg-purple-500">Purple</option>
        </select>
      </div>
      <ActionButton setOpenModal={setOpenModal}/>
    </form>
  );
};

export default Inputs;
