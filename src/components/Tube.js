import React, { useContext } from "react";
import { gameContext } from "../context/gameContext";
// import tube from "../assets/tube.png";

const Tube = ({ bottle }) => {
  const { setDestination } = useContext(gameContext);
  return (
    <div className="tube" onClick={() => setDestination(bottle.bottle)}>
      {/* <img alt="soda" className="tube-img" src={tube} /> */}

      <div className="soda-inner">
        {bottle.inner.reverse().map((sip, i) => (
          <div key={i} className="sip">
            {sip}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tube;
