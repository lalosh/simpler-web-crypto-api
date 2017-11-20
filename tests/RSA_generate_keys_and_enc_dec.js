console.log('RSA_generate_keys_and_enc_dec.js');
console.log('');

let cryptoInstance1 = new cryptoAPI('RSA');
let myData1 = 'Hello mr tester! nice to meet you by the way';

//first generate the secret key
//plus save it inside the instance and return it
cryptoInstance1.generateKey() 

.then(function(keyPair){

    //encrypt with RSA take array buffer of data and return the cipher text
    cryptoInstance1.encrypt(stringToArrayBuffer(myData1))
    
    .then(function(cipherText){ 
        
        console.log('your input data: ', myData1);
        console.log('your cipher text now: ', arrayBufferToString(cipherText));

        //decrypt need the cipher Text and return plain text
        cryptoInstance1.decrypt(cipherText)
        
        .then(function(plainText){
            console.log('your plain text data now after decryption: ', arrayBufferToString(plainText));
        })
        
    })
})






