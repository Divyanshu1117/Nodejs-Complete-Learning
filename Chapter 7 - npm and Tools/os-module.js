const os = require('os');

console.log("Hostname:", os.hostname());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Temporary Directory:", os.tmpdir());
console.log("Uptime:", os.uptime());
console.log("OS Type:", os.type());
console.log("Platform:", os.platform());