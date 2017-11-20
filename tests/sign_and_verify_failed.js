console.log('sing_and_verify_failed.js');
console.log('');

//make a forge text and get the signature
let myForgeText = 'this text is not a secret but its integrity is so important*';//added `*` at the end
let myOriginalText = 'this text is not a secret but its integrity is so important';

let digitalSignatureInstance2 = new digSigAPI();

//generate key pair
digitalSignatureInstance2.generateKey()

.then(function(keyPair){

    //get the signature from the forge text
    digitalSignatureInstance2.sign(stringToArrayBuffer(myForgeText))
    .then(function(theSignature){

        console.log('the signatue is: ', arrayBufferToString(theSignature));

        //verify using the original text which will fail ofcourse
        digitalSignatureInstance2.verify(theSignature, stringToArrayBuffer(myOriginalText))
        .then(function(resultBoolean){
           
            console.log(resultBoolean);

            if(resultBoolean == true)
                console.log('verfiy succeeded!');
            else
                console.log('data has been manipulated...Do not trust it');
        })

    })

})