const createSoda = (numBottles) => {
  // generate random number
  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  };

  const createBottles = () => {
    let bottles = [];

    // creating ampty bottles
    for (let i = 0; i < numBottles - 2; i++) {
      bottles.push({ bottle: i, inner: [] });
    }

    // filling bottles with sorted numbers
    for (let i = 0; i < numBottles - 2; i++) {
      for (let j = 0; j < numBottles - 2; j++) {
        bottles[i].inner.push(i);
      }
    }

    // randomizing numbers in bottles
    for (let i = 0; i < numBottles - 2; i++) {
      for (let j = 0; j < numBottles - 2; j++) {
        let x = getRandom(0, numBottles - 3);
        let y = getRandom(0, numBottles - 3);
        let temp = bottles[i].inner[j];
        bottles[i].inner[j] = bottles[x].inner[y];
        bottles[x].inner[y] = temp;
      }
    }
    // adding 2 ampty bottles
    bottles.push(
      { bottle: numBottles - 2, inner: [] },
      { bottle: numBottles - 1, inner: [] }
    );

    return bottles;
  };
  return createBottles();
};

const transfer = (from, to, bottles) => {
  let lastFrom = bottles[from].inner[bottles[from].inner.length - 1];
  let lastTo = bottles[to].inner[bottles[to].inner.length - 1];
  let isFromAmpty = bottles[from].inner.length === 0 ? true : false;
  let isToAmpty = bottles[to].inner.length === 0 ? true : false;

  if ((lastFrom === lastTo || isToAmpty) && !isFromAmpty) {
    let moved = bottles[from].inner.pop();
    bottles[to].inner.push(moved);
  }
  return bottles;
};

module.exports = { createSoda, transfer };