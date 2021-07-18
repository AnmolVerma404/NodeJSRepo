const path = require("path");

console.log(path.sep);

const filePath = path.join("9pathUse", "subPath", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "9pathUse", "subPath", "test.txt");
console.log(absolute);
