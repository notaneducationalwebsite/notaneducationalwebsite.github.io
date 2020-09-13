function verifyService(){
    var service = document.getElementById("serviceList").value;
    if(service == 'null'){
        alert("please select a proper service");
    }
    else if(service == 'notevil'){
        alert("Not Evil Selected - service will be added soon");
    }
    else if(service == 'gdark'){
        alert("G Dark Selected - service will be added soon");
    }
    else if(service == 'hiddenwiki'){
        alert("Hidden Wiki Selected - service will be added soon");
    }
    else if(service == 'hiddenanswers'){
        alert("Hidden Answers Selected - service will be added soon");
    }
    else if(service == 'torrents'){
        alert("Onion Lighning Fast Torrents - service will be added soon");
    }
    else if(service == 'bonus'){
        alert("Contact Admin For More Info About Bonus");
    }
}