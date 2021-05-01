import React, { createContext, useEffect, useState } from "react";
import soda from "../functions/soda";

export const gameContext = createContext();

const GameContextProvider = (props) => {
  const [bottles, setBottles] = useState("");
  const [fromTo, setFromTo] = useState([]);
  const [totalBottles] = useState(4);
  const [maxLevel] = useState(4);
  const [win, setWin] = useState(false);

  // transfer lequid from to bottle
  const setDestination = (bottle) => {
    if (fromTo.length !== 2) {
      let dup = fromTo?.filter((el) => el === bottle);
      if (!dup.length) {
        setFromTo([...fromTo, bottle]);
      } else setFromTo([]);
    }
  };

  // check for win
  const checkWin = () => {
    let check = true;
    let fullBottles = bottles.filter(
      (bottle) => bottle.inner.length === maxLevel
    );

    let res = fullBottles.map((bottle, i) => {
      if (bottle.inner[i] !== bottle.inner[i + 1]) {
        return (check = false);
      } else return check;
    });

    if (res.filter((el) => el).length === totalBottles - 2) {
      setWin(true);
    }
  };

  // transfer
  useEffect(() => {
    if (fromTo.length === 2) {
      soda.transfer(fromTo[0], fromTo[1], bottles, 4);
      setFromTo([]);
      checkWin();
    }
  }, [fromTo, bottles]);

  // start
  const start = () => {
    let bottles = soda.createSoda(totalBottles, maxLevel);
    setBottles(bottles);
    setWin(false);
  };

  // load bottles
  useEffect(() => {
    start();
  }, []);

  return (
    <gameContext.Provider
      value={{ bottles, setDestination, fromTo, start, win }}
    >
      {props.children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
