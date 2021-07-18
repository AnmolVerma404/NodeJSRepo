const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

// Uptime of system in seconds
console.log(`Uptime of user is ${os.uptime()} seconds.`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
