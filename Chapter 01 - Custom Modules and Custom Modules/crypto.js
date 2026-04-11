const crypto = require('crypto');

const data = "Hello Bro";

const hash = crypto
      .createHash('sha256')
      .update(data)
      .digest('hex');

console.log("Hash =", hash);      