import React, { createContext, useEffect, useState } from "react";
import soda from "../functions/soda";

export const gameContext = createContext();

const GameContextProvider = (props) => {
  const [bottles, setBottles] = useState("");
  const [fromTo, setFromTo] = useState([]);

  // transfer lequid from to bottle
  const setDestination = (bottle) => {
    if (fromTo.length !== 2) {
      let dup = fromTo?.filter((el) => el === bottle);
      if (!dup.length) {
        setFromTo([...fromTo, bottle]);
      } else setFromTo([]);
    }
  };

  // transfer
  useEffect(() => {
    if (fromTo.length === 2) {
      soda.transfer(fromTo[0], fromTo[1], bottles, 4);
      setFromTo([]);
    }
  }, [fromTo, bottles]);

  // load bottles
  useEffect(() => {
    let bottles = soda.createSoda(6, 4);
    setBottles(bottles);
  }, []);

  // check for win
  // useEffect(() => {
  //   let i = 0;
  //   let j = 0;
  //   let win = false;
  //   while (i < 6 || !same) {
  //     while (j < 4 || !same) {
  //       if (bottles[i].inner[i] !== bottles[i].inner[i + 1]) {
  //         same = true;
  //       }
  //     }
  //   }
  // }, [bottles]);

  return (
    <gameContext.Provider value={{ bottles, setDestination, fromTo }}>
      {props.children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
