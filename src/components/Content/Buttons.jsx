import React from "react";
import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";

const Button = ({ isActive, light, id, removedNote, toggleActive }) => {
  
  return (
    <div className="flex justify-between items-center">
      <button
        className={`py-1 px-4 border ${
          light ? "border-white/50" : "border-black"
        } rounded-full cursor-pointer`}
        onClick={() => removedNote(id)}
      >
        Remove
      </button>
      <button onClick={() => toggleActive(id)}>
        {isActive ? (
          <LiaToggleOnSolid className="text-3xl text-orange-500 cursor-pointer" />
        ) : (
          <LiaToggleOffSolid
            className={`text-3xl ${
              light ? "text-white" : "text-black"
            } cursor-pointer`}
          />
        )}
      </button>
    </div>
  );
};

export default Button;
