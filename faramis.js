var CryptoJS = require("crypto-js");

class Faramis{
    constructor(data) {
        this.secretKey = CryptoJS.enc.Utf8.parse(data.secretKey);
        this.iv = CryptoJS.enc.Utf8.parse(data.iv);
    }


    Encrypt(message){
        var plaintext = CryptoJS.enc.Utf8.parse(message);
        var ciphertext = CryptoJS.AES.encrypt(message, this.secretKey, {
            iv: this.iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
          }).toString();
        return ciphertext;
    } 

    Decrypt(ciphertext){
        var decrypted = CryptoJS.AES.decrypt(ciphertext, this.secretKey,{
            iv: this.iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
        });
        return CryptoJS.enc.Utf8.stringify(decrypted).toString();
    }
}

module.exports = Faramis
