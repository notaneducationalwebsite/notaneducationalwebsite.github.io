function authenticateKey(){
    var key = document.getElementById('key').value;
    if(key == 'qazxswedcvfr'){
        window.open("https://hss3uro2hsxfogfq.onion");
    }
    else{
        alert("Wrong Key");
    }
}