import React, { createContext, useEffect, useState } from "react";
import soda from "../functions/soda";

export const gameContext = createContext();

const GameContextProvider = (props) => {
  const [bottles, setBottles] = useState("");
  const [fromTo, setFromTo] = useState([]);
  // const [win, setWin] = useState(true);

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

  //   if (bottles.length) {
  //     bottles
  //       .filter((bottle) => bottle.inner.length)
  //       .map((bottle) => {
  //         bottle.inner.map((a, b) => {
  //           if (a !== b) {
  //             setWin(false);
  //           }
  //         });
  //       });
  //   }

  // }, [bottles]);

  return (
    <gameContext.Provider value={{ bottles, setDestination, fromTo }}>
      {props.children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
