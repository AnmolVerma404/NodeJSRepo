const { DH_CHECK_P_NOT_PRIME } = require("constants");
const { readFile, writeFile } = require("fs");

console.log("Start");

readFile("./9pathUse/first.txt", "utf8", (err, result) => {
  if (err) {//Without if statment also , code working!!!SEE👈👈👈
    console.log(err);
    return;
  }
  const first = result;
  readFile("./9pathUse/second.txt", "utf8", (err, result) => {
    if (err) {//Without if statment also , code working!!!SEE👈👈👈
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      `./9pathUse/final.txt`,
      `Here the final text : ${first} , ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {//Without if statment also , code working!!!SEE👈👈👈
          console.log(err);
          return;
        }
        console.log("Done with the task");
      }
    );
  });
});
console.log("Starting new task");