const { result } = require("lodash");
const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async()=>{
  try {
    
  } catch (error) {
    console.log(error);
  }
}

getText("./9pathUse/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
