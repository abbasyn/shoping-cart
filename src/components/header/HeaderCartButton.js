import React, { useContext } from "react";

import CartContext from "../context/cart-context";
import CartIcon from "../cart/CartIcon";

const HeaderCartButton = ({ onClick }) => {
  const CartCtx = useContext(CartContext);

  const NumberOfCartItems = CartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <>
      <button
        onClick={onClick}
        className="flex justify-center w-[200px] items-center gap-2 bg-slate-600 rounded-full p-2 hover:bg-slate-500"
      >
        <span>
          <CartIcon />
        </span>
        <span className="font-bold text-white">Your Cart</span>
        <span className="bg-red-50 rounded-full px-4 py-2 font-bold text-[#e68a49]">
          {NumberOfCartItems}
        </span>
      </button>
    </>
  );
};

export default HeaderCartButton;
