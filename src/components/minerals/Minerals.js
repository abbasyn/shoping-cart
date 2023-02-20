import React from "react";

import MineralsItem from "./MineralsItem";
import { GEMS } from "../product/products";

const Minerals = (props) => {
  return (
    <>
      <h2 className="font-bold text-center p-4 text-2xl mt-6">Minerals</h2>
      <div className="container mx-auto flex flex-wrap  justify-around">
        {GEMS.map((gem) => (
          <MineralsItem {...gem} />
        ))}
      </div>
    </>
  );
};

export default Minerals;
