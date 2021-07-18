// const fs = require("fs"); //OR use specific to reduce writing fs.readFileSync or etc...
const { readFileSync, writeFileSync } = require("fs");
console.log("Start");
const first = readFileSync("./9pathUse/first.txt", "utf-8");
const second = readFileSync("./9pathUse/second.txt", "utf-8");

// console.log(first, second);

writeFileSync(
  `./9pathUse/final.txt`,
  `Here the final text : ${first} , ${second}`,
  { flag: "a" }
);
console.log("Done with the task");
console.log("starting a new task");