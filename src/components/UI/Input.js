import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex flex-col items-center">
      <label className=" font-thin">{props.label}</label>
      <input
        className="w-8 bg-slate-300 p-1 rounded"
        {...props.input}
        ref={ref}
      ></input>
    </div>
  );
});

export default Input;
