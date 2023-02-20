import React, { useState } from "react";

import Cart from "../cart/Cart";
import Modal from "../UI/Modal";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full" onClose={() => setIsOpen(false)}>
      <header className="flex justify-between items-center fixed w-full px-[5%] h-20  bg-gradient-to-r from-indigo-300 top-0 left-0 right-0 via-purple-500 to-pink-400">
        <h1 className="text-black font-bold">Minerals Point</h1>
        <HeaderCartButton onClick={() => setIsOpen(true)} />
      </header>
      <div className="w-full h-[22rem] mt-12">
        <img src="/assets/banner.jpg" className="w-full h-full object-cover" />
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Cart />
      </Modal>
    </div>
  );
};

export default Header;
