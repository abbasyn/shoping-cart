import React, { useContext } from "react";

import CartContext from "../context/cart-context";

const CartItem = (props) => {
  // const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // const hasItems = cartCtx.length.length > 0;

  const cartItems = cartCtx.items.map((item) => item.name);

  return (
    <>
      {cartCtx.items.map((item) => (
        <div>
          <div
            className="flex justify-around  items-center font-bold py-3 
          shadow-md rounded bg-slate-50"
          >
            <div>{item.name}</div>
            <div className="text-[#e69b65]">{item.price}</div>
            <div className="flex items-center gap-3">
              <div>{item.amount}</div>
              <div className=" flex justify-center items-center flex-col gap-1">
                <button
                  className="flex pb-1 justify-center items-center border border-[#e68a49]  
                rounded-full w-5 h-5 font-bold text-black bg-slate-200 hover:bg-slate-400"
                >
                  +
                </button>
                <button
                  className="flex pb-1 justify-center items-center border border-[#e68a49] 
                rounded-full w-5 h-5 font-bold text-black  bg-slate-200 hover:bg-slate-400"
                >
                  -
                </button>
              </div>
            </div>
            <div>{totalAmount}</div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default CartItem;
