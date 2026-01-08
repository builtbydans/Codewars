const warnTheSheep = (queue) => {
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  }

  const wolfIndex = queue.indexOf("wolf");
  return `Oi! Sheep number ${
    queue.length - wolfIndex - 1
  }! You are about to be eaten by a wolf!`;
};

console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ])
); // 2

console.log(
  warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]) // 5
);

console.log(
  warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]) // 6
);

console.log(warnTheSheep(["sheep", "sheep", "wolf"])); // pls go away
