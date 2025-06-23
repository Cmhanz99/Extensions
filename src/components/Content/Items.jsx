import React, { useState } from "react";
import Button from "./Buttons";

const Items = ({ light, box, setBox }) => {
  const removedNote = (id) => {
    const item = box.filter((item) => item.id !== id);
    setBox(item);
  };
  const toggleActive = (id) => {
    setBox((prevBox) =>
      prevBox.map((note) =>
        note.id === id ? { ...note, isActive: !note.isActive } : note
      )
    );
  };
  return (
    <>
      {box.map((item) => (
        <div
          className={`border ${
            light
              ? "bg-slate-800  border-white/30"
              : "bg-white text-black border-black"
          } h-40 flex flex-col justify-between rounded-xl p-4`}
        >
          <div className="w-ull flex gap-4">
            <div
              className={`flex-shrink-0 h-13 ${item.color} w-13 rounded`}
            ></div>
            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-sm line-clamp-2">{item.desc}</p>
            </div>
          </div>
          <Button
            isActive={item.isActive}
            light={light}
            id={item.id}
            toggleActive={toggleActive}
            removedNote={removedNote}
          />
        </div>
      ))}
    </>
  );
};

export default Items;
