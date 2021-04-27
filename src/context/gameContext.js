import React, { createContext, useEffect, useState } from "react";
import soda from "../functions/soda";

export const gameContext = createContext();

const GameContextProvider = (props) => {
  const [bottles, setBottles] = useState("");
  const [fromTo, setFromTo] = useState([]);

  const setDestination = (bottle) => {
    if (fromTo.length !== 2) {
      setFromTo([...fromTo, bottle]);
    }
  };

  useEffect(() => {
    if (fromTo.length === 2) {
      soda.transfer(fromTo[0], fromTo[1], bottles);
      setFromTo([]);
    }
  }, [fromTo]);

  useEffect(() => {
    let bottles = soda.createSoda(6);
    setBottles(bottles);
  }, []);

  return (
    <gameContext.Provider value={{ bottles, setDestination }}>
      {props.children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
