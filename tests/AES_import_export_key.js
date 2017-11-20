console.log('AES_import_export_key.js');
console.log('');

let cryptoInstance3 = new cryptoAPI('AES');
let someData = 'hello importer!';

//generate the secret key
cryptoInstance3.generateKey()
.then(function(secretKey){

    //encrypt some data
    cryptoInstance3.encrypt(stringToArrayBuffer(someData))
    .then(function(cipherObject){
        
        console.log('cipher gotten using cryptoInstance3');
        console.log('your cipher text is: ', arrayBufferToString(cipherObject.cipherText));

        //export the key to be used by another crypto instance
        cryptoInstance3.exportKey()
        .then(function(arrayBufferKey){

            console.log('exporting key done.')
            
            //make another crypto instance and import the key from the previous instance
            let another_crypto = new cryptoAPI('AES');
            another_crypto.importKey(arrayBufferKey)

            //use the key imported from the previous instance to decrypt the cipher text
            .then(function(key){
                
                console.log('importing key done.');

                console.log('start decrypting...')
                another_crypto.decrypt(cipherObject.cipherText, cipherObject.iv)
            
                .then(function(plainText){
                    
                    console.log('the plain text acquired by using decryption on the new instance: ', arrayBufferToString(plainText))
                })
            })
    
        })

    })

})