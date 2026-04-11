const url = require('url');

let adr = 'http://localhost:3000/student?name=guru&course=nodejs';

let q = url.parse(adr, true);

console.log("Host:", q.host);
console.log("Pathname:", q.pathname);
console.log("Search:", q.search);

let qdata = q.query;
console.log(q.query.name);
console.log(q.query.course);