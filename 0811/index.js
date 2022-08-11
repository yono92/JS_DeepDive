const crypto = require('crypto');

const num = "1653602421236";


const hashed = crypto.createHash('sha256').update(num).digest('hex');

console.log(hashed);