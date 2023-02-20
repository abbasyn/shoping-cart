import React, { useContext, useReducer } from "react";

import CartContext from "./cart-context";

const ContextProvider = ({ children }) => {
  const initialValue = {
    items: [],
    totalAmount: 0,
  };

  const reducer = (state, action) => {};
  const [cart, dispatch] = useReducer(reducer, initialValue);

  const addCartItemHandler = (item) => {
    console.log({ item });

    dispatch({ type: "ADD", item: "item" });
  };

  const removeCartItemHandler = (id) => {
    dispatch({ type: "REMOVE", id: "id" });
  };

  const value = {
    items: [],
    totalAmount: 0,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default ContextProvider;
