const url = require('url');

let adr = 'http://localhost:3000/search?year=2021&month=august';

let q = url.parse(adr, true);

console.log("Host:", q.host);
console.log("Pathname:", q.pathname);
console.log("Search:",q.search);

let qdata = q.query;
console.log("Month:", qdata.month);
console.log("Year:", qdata.year);