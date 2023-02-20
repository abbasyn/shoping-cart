import React, { useRef, useState } from "react";

import Input from "../UI/Input";

const MineralsItemForm = ({ addItemToCart, ...props }) => {
  const [inputVal, setInputVal] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();
    addItemToCart(inputVal);
    console.log("SUBMITTOING", inputVal);
  };
  //const addCartItem = props.onClick;
  return (
    <form className="flex justify-between" onSubmit={submitHandler}>
      <button
        // onClick={onClick}
        type="submit"
        className="bg-[#f7ae6a] hover:bg-[#ee9b4d] rounded w-44 p-3"
      >
        ADD TO CART
      </button>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
    </form>
  );
};

export default MineralsItemForm;
