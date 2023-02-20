import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col items-center">
      <label className=" font-thin">{props.label}</label>
      <input className="w-8 bg-slate-300 p-1 rounded" {...props.input}></input>
    </div>
  );
};

export default Input;
