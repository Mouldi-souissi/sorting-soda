import React, { createContext, useCallback, useEffect, useState } from "react";
import soda from "../functions/soda";

export const gameContext = createContext();

const GameContextProvider = (props) => {
  const [bottles, setBottles] = useState("");
  const [fromTo, setFromTo] = useState([]);
  const [totalBottles] = useState(6);
  const [maxLevel] = useState(4);
  const [win, setWin] = useState(false);

  // transfer lequid from bottle to bottle
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
      // check for win
      const checkWin = () => {
        let check = true;
        let fullBottles = bottles.filter(
          (bottle) => bottle.inner.length === maxLevel
        );

        let res = fullBottles.map((bottle, i) => {
          if (bottle.inner[i] !== bottle.inner[i + 1] && i < maxLevel - 1) {
            return (check = false);
          } else return check;
        });

        if (res.filter((el) => el).length === totalBottles - 2) {
          setWin(true);
        }
      };
      checkWin();
    }
  }, [fromTo, bottles, maxLevel, totalBottles]);

  // start
  const start = useCallback(() => {
    let bottles = soda.createSoda(totalBottles, maxLevel);
    setBottles(bottles);
    setWin(false);
  }, [maxLevel, totalBottles]);

  // load bottles
  useEffect(() => {
    start();
  }, [start]);

  return (
    <gameContext.Provider
      value={{ bottles, setDestination, fromTo, start, win }}
    >
      {props.children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
