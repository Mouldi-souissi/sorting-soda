import React, { useContext } from "react";
import Tube from "./Tube";

import { gameContext } from "../context/gameContext";

const Tubes = (e) => {
  const { bottles } = useContext(gameContext);

  return (
    <div className="tubes">
      <div className="tubes-container container pt-5">
        <div className="row">
          {bottles &&
            bottles.map((bottle, i) => <Tube key={i} bottle={bottle} />)}
        </div>
      </div>
    </div>
  );
};

export default Tubes;
