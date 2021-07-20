const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to out home page!!!");
  } else if (req.url === "/about") {
    res.end("Here is our short history.");
  } else {
    res.end(`
    <h1>Oops</h1>
    <p1>We can't seem to find the page you are looking for</p>
    <a href="/">Back to home</a>
    `);
  }
});

server.listen(5000);

// Module like lodash
// const _ = require("lodash");

// const item = [1, [2, [3, [4, 5]]]];
// const newItem = _.flattenDeep(item);

// console.log(newItem);
// console.log("Hello World!!!");
