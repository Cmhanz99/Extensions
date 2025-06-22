import React from "react";
import { actives } from "../../data/boxdata";

const Content = ({light}) => {
  return (
    <div className="mt-10 flex md:flex-row gap-4 flex-col justify-between items-center">
      <h2 className={`${light ? 'text-white' : 'text-black'} text-2xl font-semibold`}>Extensions List</h2>
      <div className="flex items-center gap-2">
        {actives.map((item) => (
          <Active isActive={item.isActive} title={item.title} />
        ))}
      </div>
    </div>
  );
};

const Active = ({ isActive, title }) => {
  return (
    <p
      className={`py-1 px-4 rounded-full ${
        isActive ? "bg-red-400 text-black" : "bg-slate-700 text-white/60"
      }`}
    >
      {title}
    </p>
  );
};

export default Content;
