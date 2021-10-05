var Faramis = require("../faramis.js");
var faramis = new Faramis({
    secretKey: 'dEvL3kQ3ubNro4pK',
    iv: 'yDhtOpAkafAbjegH'
});

var encryptedMessage = faramis.Encrypt('Password!!2021');
console.log(encryptedMessage);
var decryptedMessage = faramis.Decrypt(encryptedMessage);
console.log(decryptedMessage);