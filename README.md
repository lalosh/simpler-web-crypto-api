# simpler-web-crypto-api

use <a href="https://www.w3.org/TR/WebCryptoAPI/">Web Crypto API</a> to make simpler API for the browser

#
# فَلِلَّهِ الْحَمْدُ رَبِّ السَّمَاوَاتِ وَرَبِّ الْأَرْضِ رَبِّ الْعَالَمِينَ


# crypto API
this API has the listed functions:


#
# Symmetric Encryption - AES (Advanced Encryption Standard)

>create new Instance
```js
    let cryptoInstance = new cryptoAPI('AES');
```

>generateKey
```js
    cryptoInstance.generateKey()  //return a promise with the secret key
    .then(function(secretKey){
        //use your secretKey here
    })
```

>exportKey
```js
    cryptoInstance.exportKey() //return a promise with the key as array buffer representing the public key
    .then(function(arrayBufferPublicKey){
        //the key exported is an Array Buffer
        //you can use the exported array buffer key here(to import later for example)
    })

```
>importKey
```js
    let cryptoInstance = new cryptoAPI('AES');
    
    //take the array buffer representing the key
    cryptoInstance.importKey(arrayBufferPublicKey) //return a promise with the key object
    .then(function(keyObject){
        //use the key object to encrypt/decrypt
    })
                
```

>encrypt
>>note that encryption with AES return an object
```js
    //take the plain text
    cryptoInstance.encrypt(stringToArrayBuffer(plainText)) //return a promise with the cipher object
    .then(function(cipherObject){
        //use the cipher object (send for example)
        console.log('cipher text is: ', cipherObject.cipherText);
        console.log('iv is: ', cipherObject.iv);
    })
```

>decrypt
>>note that decryption with AES need two parameters from the cipher object
```js
    //take the cipher object to decrypt a cipher text
    cryptoInstance.decrypt(cipherObject.cipherText, cipherObject.iv) //return a promise with the plain text

    .then(function(plainText){
        console.log('your plain text: ', arrayBufferToString(plainText));
    })
```

## why encrypt with AES return an object(which is then used with the decrypt)?
Because AES use initialization vector for each encryption process which make two identical
messages have different cipher text output




#
# Asymmetric Encryption - RSA

>create new Instance
```js
    let cryptoInstance = new cryptoAPI('RSA');
```

>generateKey
```js
    cryptoInstance.generateKey()  //return a promise with the secret key
    .then(function(keyPair){
        //use your keyPair here
    })
```

>exportKey
```js
    cryptoInstance.exportKey() //return a promise with the public key as array buffer
    .then(function(arrayBufferKey){
        //the public key exported is an Array Buffer
        //you can use the exported array buffer key here(to import later for example)
    })

```
>importKey
```js
    let cryptoInstance = new cryptoAPI('RSA');
    
    //take the array buffer representing the public key
    cryptoInstance.importKey(arrayBufferPublicKey) //return a promise with the public key object
    .then(function(publicKeyObject){
        //use the public key object to encrypt
    })
                
```

>encrypt
```js
    //take the plain text to encrypt
    cryptoInstance.encrypt(stringToArrayBuffer(plainText)) //return a promise with the cipher text
    .then(function(cipherText){
        //use the cipher text
        console.log('cipher text is: ', cipherText);
    })
```

>decrypt
```js
    //take the cipher text
    cryptoInstance.decrypt(cipherText) //return a promise with the plain text

    .then(function(plainText){
        console.log('your plain text: ', arrayBufferToString(plainText));
    })
```
#

# Digital Signature API
this API has the listed functions:

>create a new instance
```js
    let digSigInstance = new digSigAPI();

```

>generateKey
```js
    //generate key pair
    digSigInstance.generateKey() //return a promise with the key pair

    .then(function(keyPair){
        //use the key pair here
    })
```

>sign
```js
    //take the plain text to sign
    digSigInstance.sign(stringToArrayBuffer(plainText)) //return a promise with the signature
    .then(function(theSignature){
        //use the signature here
    })
```

>verify
```js
    //take the signature made of the plain text and the plain text itself
    digSigInstance.verify(theSignature, stringToArrayBuffer(plainText))
    //return a promise with a boolean value(true if succeeded/false otherwise)
    
    .then(function(resultBoolean){
        //resultBoolean is either true or false
        if(resultBoolean) //succeeded
        else //verify failed => forge plain text maybe...
    })
```

>importKey
```js
    //take the array buffer represnting the public key
    digSigInstance.importKey(arrayBufferPublicKey) //return a promise with the public key object
    .then(function(publicKeyObject){
        //use public key object here
    })
```

>exportKey
```js
    digSigInstance.exportKey() //return a promise with the public key object

    .then(function(arrayBufferPublicKey){
        //use the array buffer public key
    })  
```
#