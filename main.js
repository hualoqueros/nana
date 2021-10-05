var CryptoJS = require("crypto-js");

// Encrypt
var key = 'dEvL3kQ3ubNro4pK'
var message = 'Password!!$5%w310'

let iv = 'yDhtOpAkafAbjegH';
let secret_key = key;
let plaintext = message;
console.log('plaintext: ', plaintext);

plaintext = CryptoJS.enc.Utf8.parse(plaintext);
secret_key = CryptoJS.enc.Utf8.parse(key);
iv = CryptoJS.enc.Utf8.parse(iv);

console.log('secret_key: ', secret_key);
console.log('iv: ', iv);

var ciphertext = CryptoJS.AES.encrypt(plaintext, secret_key, {
  iv: iv,
  padding: CryptoJS.pad.Pkcs7,
  mode: CryptoJS.mode.CBC,
}).toString();

console.log('encrypted: ', ciphertext);

var decrypted = CryptoJS.AES.decrypt(ciphertext, secret_key,{
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
});

console.log('decrypted (raw): ', decrypted);
// console.log('decrypted (hex): ', decrypted.toString());
console.log('decrypted (str): ', CryptoJS.enc.Utf8.stringify(decrypted).toString());

// var encryptedKey = CryptoJS.SHA256(key).toString();
// console.log('encryptedKey',encryptedKey); // 'my message'
// var AESKey = CryptoJS.AES.encrypt(encryptedKey);
// console.log('AESKey',AESKey); // 'my message'
// var ciphertext = CryptoJS.AES.encrypt(message, encryptedKey, {
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   });
// console.log('ciphertext',ciphertext.toString()); // 'my message'
// // Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, encryptedKey);
// var originalText = bytes.toString(CryptoJS.enc.Utf8);

// console.log(originalText); // 'my message'