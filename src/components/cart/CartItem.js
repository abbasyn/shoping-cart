import React from "react";

const CartItem = (props) => {
  return (
    <>
      <div className="flex justify-around items-center font-bold py-3 shadow-md rounded bg-slate-50">
        <div>Ruby</div>
        <div className="text-[#e69b65]">Price: $20</div>
        <div className="flex items-center gap-3">
          <div>5</div>
          <div className=" flex justify-center items-center flex-col gap-1">
            <button className="flex pb-1 justify-center items-center border border-[#e68a49]  rounded-full w-5 h-5 font-bold text-black bg-slate-200 hover:bg-slate-400">
              +
            </button>
            <button className="flex pb-1 justify-center items-center border border-[#e68a49] rounded-full w-5 h-5 font-bold text-black  bg-slate-200 hover:bg-slate-400">
              -
            </button>
          </div>
        </div>
        <div>amount: $100</div>
      </div>
      <hr />
      <div className="flex justify-around items-center font-bold py-3 shadow-md rounded  bg-slate-50">
        <div>Ruby</div>
        <div className="text-[#e69b65]">Price: $20</div>
        <div className="flex items-center gap-3">
          <div>5</div>
          <div className=" flex justify-center items-center flex-col gap-1">
            <button className="flex pb-1 justify-center items-center border border-[#e68a49]  rounded-full w-5 h-5 font-bold text-black bg-slate-200 hover:bg-slate-400">
              +
            </button>
            <button className="flex pb-1 justify-center items-center border border-[#e68a49] rounded-full w-5 h-5 font-bold text-black  bg-slate-200 hover:bg-slate-400">
              -
            </button>
          </div>
        </div>
        <div>amount: $100</div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
