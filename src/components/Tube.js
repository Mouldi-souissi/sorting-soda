import React, { useContext } from "react";
import { gameContext } from "../context/gameContext";
// import tube from "../assets/tube.png";

const Tube = ({ bottle }) => {
  const { setDestination } = useContext(gameContext);

  const colorise = (num) => {
    switch (num) {
      case 0:
        return "blue";
      case 1:
        return "red";
      case 2:
        return "green";
      case 3:
        return "yellow";
      default:
        return "black";
    }
  };
  return (
    <div className="tube" onClick={() => setDestination(bottle.bottle)}>
      {/* <img alt="soda" className="tube-img" src={tube} /> */}

      <div className="soda-inner d-flex flex-column-reverse">
        {bottle.inner.map((sip, i) => (
          <div key={i} className={`sip ${colorise(sip)}`}>
            {sip}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tube;
