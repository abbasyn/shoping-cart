import React, { useContext } from "react";

import CartContext from "../context/cart-context";

import MineralsItemForm from "./MineralsItemForm";

const MineralsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCart = (amount) => {
    cartCtx.addItem({
      ...props,
      amount,
    });

    console.log("CALLING", amount, props);
  };
  return (
    <div className=" max-w-[250px] max-h-[500px] mb-4 h-[390px] bg-white border p-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="">
        <img className="w-full h-40 " src={props.imgUrl} width={180}></img>
      </div>

      <div className="flex flex-col">
        <h2 className="font-bold my-2">{props.name}</h2>
        <h3 className="pb-1">{props.description}</h3>
        <p className="text-black p- rounded py-1 font-bold">
          Price: ${props.price}
        </p>
        <div className="rounded border border-[#e68a49]  p-1 font-bold bg-[]">
          <MineralsItemForm addItemToCart={addItemToCart} />
        </div>
      </div>
    </div>
  );
};

export default MineralsItem;
