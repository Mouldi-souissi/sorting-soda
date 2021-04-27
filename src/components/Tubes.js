import React, { useContext } from "react";
import Tube from "./Tube";

import { gameContext } from "../context/gameContext";

const Tubes = () => {
  const { bottles } = useContext(gameContext);
  return (
    <div className="tubes my-5">
      <div className="d-flex align-items-center justify-content-between">
        {bottles &&
          bottles.map((bottle, i) => <Tube key={i} bottle={bottle} />)}
      </div>
    </div>
  );
};

export default Tubes;
