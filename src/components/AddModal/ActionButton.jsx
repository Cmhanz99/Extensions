import React from "react";

const ActionButton = ({setOpenModal}) => (
  <div className="border-t border-gray-500 mt-5 pt-3 flex justify-between items-center px-6">
    <button type="submit" className="bg-orange-500 text-white py-1 px-5 rounded">Add</button>
    <button onClick={() => setOpenModal(false)} type="button" className="bg-red-500 text-white py-1 px-5 rounded">Cancel</button>
  </div>
);

export default ActionButton;
