import React, { useRef, useState } from "react";

import Input from "../UI/Input";

const MineralsItemForm = ({ addItemToCart, ...props }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  // const [inputVal, setInputVal] = useState(1);
  // addItemToCart(inputVal);
  // console.log("SUBMITTOING", inputVal);

  const submitHandler = (event) => {
    event.preventDefault();

    const enterdAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enterdAmount;

    if (
      enterdAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enterdAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    addItemToCart(enteredAmountNumber);
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
      {!amountIsValid && <p>Please enter a Valid Amount (1-5).</p>}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",

          // value: inputVal,
          // onChange: (e) => {
          //   setInputVal(e.target.value);
          // },
        }}
      />
    </form>
  );
};

export default MineralsItemForm;
