import React, { useContext } from "react";
import { gameContext } from "../context/gameContext";
// import tube from "../assets/tube.png";

const Tube = ({ bottle, selectBottle }) => {
  const { setDestination, fromTo } = useContext(gameContext);

  const handleSelect = () => {
    setDestination(bottle.bottle);
  };

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
    <div
      className={`tube col-2 ${
        fromTo?.length !== 0 && fromTo[0] === bottle.bottle && "activeBottle"
      }`}
      onClick={handleSelect}
    >
      <div
        className="soda-inner d-flex flex-column-reverse"
        // className={`soda-inner d-flex flex-column-reverse ${
        //   active && "activeBottle"
        // }`}
      >
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
