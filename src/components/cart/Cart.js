import React from "react";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <>
      <CartItem />
      <span>
        <button className="w-14  font-bold text-white p-1 bg-slate-400 hover:bg-slate-500 rounded mt-4 borde ml-[36%] border-[#e68a49] ">
          Order
        </button>
      </span>
    </>
  );
};

export default Cart;
