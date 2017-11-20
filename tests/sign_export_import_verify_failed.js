console.log('sign_export_import_verify_failed.js');
console.log('');


let digSig = new digSigAPI();
let amazingData = 'hello world! right?';
let forgeData = 'hello world! right?*';

console.log('your input data is: ', amazingData);

//generate key by the first instance
digSig.generateKey()
.then(function(keyPair){

    //sign with the first instance
    digSig.sign(stringToArrayBuffer(amazingData))
    .then(function(theSignature){

        console.log('your generated signature is: ', arrayBufferToString(theSignature));
        
        //export the key to make it available for another instance
        digSig.exportKey()

        .then(function(publicKey){
        
            let newDigSig = new digSigAPI();
            
            newDigSig.importKey(publicKey)
            .then(function(theSamePublicKey){

                newDigSig.verify(theSignature, stringToArrayBuffer(forgeData))
                .then(function(resultBoolean){
        
                    console.log(resultBoolean);
                    if(resultBoolean == true)
                        console.log('verify succeeded!');
                    else
                        console.log('failed to verify data..do not trust this data')

                })
            })


        })

    })

})