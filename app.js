"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const searchbtn = document.getElementById('search');
    let heroesUrl = "superheroes.php";
    const rqst = new XMLHttpRequest();

    console.log(searchbtn);
    
    searchbtn.addEventListener('click', function(el){  
        console.log("Guau");
        el.preventDefault();

        rqst.onreadystatechange = function (){
            if (rqst.readyState === XMLHttpRequest.DONE){
                if (rqst.status === 200){
                    let reply = rqst.responseText;
                    alert(reply);
                } else{
                    alert('There was a problem with the request.')
                }
            }
        };

        rqst.open('GET', heroesUrl);
        rqst.send();
    });
   
});