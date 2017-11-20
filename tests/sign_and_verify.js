console.log('sing_and_verify.js');
console.log('');

let digitalSignatureInstance = new digSigAPI();
let myText = 'this text is not a secret but its integrity is so important';
console.log('your input text is: ', myText);


//generate key pair
digitalSignatureInstance.generateKey()

.then(function(keyPair){

    digitalSignatureInstance.sign(stringToArrayBuffer(myText))
    .then(function(theSignature){

        console.log('the signatue is: ', arrayBufferToString(theSignature));

        //true verify
        digitalSignatureInstance.verify(theSignature, stringToArrayBuffer(myText))
        .then(function(resultBoolean){
           
            console.log(resultBoolean);

            if(resultBoolean == true)
                console.log('verfiy succeeded!');
            else
                console.log('data has been manipulated...Do not trust it');
        })

    })

})


