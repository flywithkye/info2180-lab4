"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const searchbtn = document.getElementById('search');
    let heroesUrl = "superheroes.php";
    const rqst = new XMLHttpRequest();
    let resultdiv = document.getElementById('result');
    let searchinput;
    let temp;
    let replyarr;
    const pic = document.createElement("img");
    const alias = document.createElement("h3");
    const name = document.createElement("h4");
    const bio = document.createElement("p");

    console.log(searchbtn);
    console.log(resultdiv);
    
    
    searchbtn.addEventListener('click', function(el){  
        console.log("Test");
        el.preventDefault();
        let tp;

        searchinput = document.getElementById('hero').value;  
        temp = searchinput.split(' ');
        console.log(temp);  

        temp.forEach((e, i) => {
            tp = e.toLowerCase();
            console.log(tp);
            temp[i] = tp.charAt(0).toUpperCase() + tp.slice(1); 
            console.log(temp[i]);
        });

        console.log(temp);
        searchinput = temp.join(' ');
        console.log(searchinput);  
       

        rqst.onreadystatechange = function (){
            if (rqst.readyState === XMLHttpRequest.DONE){
                if (rqst.status === 200){
                    let reply = rqst.responseText;  
                    console.log(reply);

                    if (reply.includes("<li>") || reply.includes("not found")){
                        var child = resultdiv.lastElementChild;   
                        while (child) {
                            resultdiv.removeChild(child); 
                            child = resultdiv.lastElementChild; 
                        } 

                        if (reply.includes("not found")){
                            resultdiv.innerHTML = reply.toUpperCase();
                        } else{
                            resultdiv.innerHTML = reply;
                        }
                            
                        console.log(reply);
                        //alert(reply);
                    } 
                    else {                       
                        resultdiv.innerHTML = "";
                        replyarr = reply.trim().split(/\r?\n/);
                        console.log(replyarr);    

                        pic.id = "heropic";
                        switch (replyarr[0]) {
                            case "Captain America":
                                pic.src = "pics/captain.jpg";
                              break;
                            case "Ironman":
                                pic.src = "pics/ironman.jpeg";
                              break;
                            case "Spiderman":
                                pic.src = "pics/spiderman.jpg";
                              break;
                            case "Captain Marvel":
                                pic.src = "pics/capmarvel.jpg";
                              break;
                            case "Black Widow":
                                pic.src = "pics/widow.jpg";
                              break;
                            case "Hulk":
                                pic.src = "pics/hulk.png";
                              break;
                            case "Hawkeye":
                                pic.src = "pics/hawkeye.jpg";
                              break;
                            case "Black Panther":
                                pic.src = "pics/panther.jpeg";
                              break;
                            case "Thor":
                                pic.src = "pics/thor.jpg";
                              break;
                            case "Scarlett Witch":
                                pic.src = "pics/witch.jpg";
                              break;
                          }

                        alias.innerHTML = replyarr[0].toUpperCase();
                        name.innerHTML = "A.K.A. " + replyarr[1].toUpperCase(); 
                        bio.innerHTML = replyarr[2];
                        
                        resultdiv.appendChild(pic);
                        resultdiv.appendChild(alias);
                        resultdiv.appendChild(name);
                        resultdiv.appendChild(bio);
                    }                           
                    
                    
                } else {
                    alert('There was a problem with the request.')
                }
            }
        };

        
        rqst.open('GET', heroesUrl+"?hero="+searchinput);
        rqst.send();
    });
   
});