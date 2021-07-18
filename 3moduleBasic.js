const name = require("./4name");
const msg = require("./5utils");
const data = require("./6ulternateExport");
require("./7add");

console.log(name);
console.log(data);

// msg.msg(name.alen);
// msg.msg(name.anmol);//OR
msg(name.alen);
msg(name.anmol);
