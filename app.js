"use strict";
const rqst = new XMLHttpRequest();

function getHeroes(){
    if (rqst.readyState === XMLHttpRequest.DONE){
        if (rqst.status === 200){
            let reply = rqst.responseText;
            alert(reply);
        } else{
            alert('There was a problem with the request.')
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchbtn = document.getElementById('search');
    let heroesUrl = "superheroes.php";

    console.log(searchbtn);
    
    searchbtn.addEventListener('click', function(el) {  
        console.log("Guau");

        rqst.onreadystatechange = getHeroes();
        rqst.open('GET', heroesUrl);
        rqst.send();
    });
   
});