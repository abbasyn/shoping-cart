import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Minerals from "./components/minerals/Minerals";
import ContextProvider from "./components/context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Minerals />
    </ContextProvider>
  );
}

export default App;
