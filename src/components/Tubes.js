import React, { useContext } from "react";
import Tube from "./Tube";

import { gameContext } from "../context/gameContext";

const Tubes = (e) => {
  const { bottles } = useContext(gameContext);

  return (
    <div className="tubes my-5">
      <div className="tubes-container">
        {bottles &&
          bottles.map((bottle, i) => <Tube key={i} bottle={bottle} />)}
      </div>
    </div>
  );
};

export default Tubes;
