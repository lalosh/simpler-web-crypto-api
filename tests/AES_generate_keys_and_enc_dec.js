console.log('AES_generate_keys_and_enc_dec.js');
console.log('');

let cryptoInstance2 = new cryptoAPI('AES');
let myData2 = 'Hello mr tester! nice to meet you by the way';

//first generate the secret key
//plus save it inside the instance and return it
cryptoInstance2.generateKey() 

.then(function(secretKey){

    //encrypt with AES take array buffer of data and return an objec
    cryptoInstance2.encrypt(stringToArrayBuffer(myData2))
    
    .then(function(cipherObject){ //cipherObject has the cipher text as array buffer plus the iv
    //because you have a uniqe iv(full of random values) for each message(even if you have two identical messages)
    //you won't get the same cipher text for any two messages(yes even if they basically contains the same input text)
        
        console.log('your input data: ', myData2);
        console.log('your cipher text now: ', arrayBufferToString(cipherObject.cipherText));
        console.log('your uniqe random iv for this msg: ', cipherObject.iv);

        //decrypt need the whole cipher object
        cryptoInstance2.decrypt(cipherObject.cipherText, cipherObject.iv)
        
        .then(function(plainText){
            console.log('your plain text data now after decryption: ', arrayBufferToString(plainText));
        })
        
    })
})






