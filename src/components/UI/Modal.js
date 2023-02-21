import React from "react";

import ReactDOM from "react-dom";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div
        onClick={() => onClose()}
        className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,.5)]"
      >
        <div
          className="min-h-[30%] w-[400px] p-3 rounded-2xl bg-white max-h-80 overflow-scroll"
          onClick={(e) => e.stopPropagation()}
        >
          {children}

          <span>
            <button
              onClick={onClose}
              className="w-14 ml-3  font-bold text-white p-1 bg-slate-400 hover:bg-slate-500 rounded mt-4 borde  border-[#e68a49] "
            >
              Close
            </button>
          </span>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
