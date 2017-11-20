console.log('RSA_import_export_key.js');
console.log('');

let cryptoInstance4 = new cryptoAPI('RSA');
let someData2 = 'hello importer!';
console.log('your input data: ', someData2);


//generate the secret key
cryptoInstance4.generateKey()
.then(function(secretKey){

    //export the public key to be used by another crypto instance
    cryptoInstance4.exportKey()
    .then(function(arrayBufferKey){

        console.log('exporting public key done.')
        
        //make another crypto instance and import the key from the previous instance
        let another_crypto = new cryptoAPI('RSA');
        another_crypto.importKey(arrayBufferKey)

        //use the key imported from the previous instance to encrypt the cipher text
        .then(function(publicKey){
            
            console.log('importing public key done.');

            console.log('start encrypting...');

            another_crypto.encrypt(stringToArrayBuffer(someData2))
        
            .then(function(cipherText){
                
                console.log('cipher encrypted by the exported public key: ',
                            arrayBufferToString(cipherText))
            
                cryptoInstance4.decrypt(cipherText)
                .then(function(plainText){
                    console.log('plain text decrypted by the original private key: ',
                                arrayBufferToString(plainText));
                })

            })
        })

    })
})
