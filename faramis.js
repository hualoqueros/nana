var CryptoJS = require("crypto-js");

class Faramis{
    constructor(data) {
        this.secretKey = data.secretKey
        this.iv = data.iv
    }

    generateKey(){
        return CryptoJS.enc.Utf8.parse(this.data.secretKey);
    }

    encrypt(message){
        plaintext = CryptoJS.enc.Utf8.parse(message);
        var ciphertext = CryptoJS.AES.encrypt(plaintext, secret_key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
          }).toString();
        return ciphertext;
    } 

    decrypt(ciphertext){
        var decrypted = CryptoJS.AES.decrypt(ciphertext, secret_key,{
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
        });
        return CryptoJS.enc.Utf8.stringify(decrypted).toString()
    }
}

module.exports = Faramis
