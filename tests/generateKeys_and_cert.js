
let ds = new digSigAPI();

ds.generateKey()
.then(function(keyPair){

    ds.createCertificate("louayalosh","someorg","unito","li",keyPair)
    .then(function(a){

        console.log(a.publicKeyAsPemText);
        console.log(a.certAsPemText);

        let pemUrl_cert = "data:application/octet-stream;charset=UTF-8;base64," + btoa(a.certAsPemText);
        
        document.getElementById('cert-pem-download').setAttribute('href',pemUrl_cert);
    })
    
})
