var min = 0
var sec = 0
var mil = 0
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var milHeading = document.getElementById("mil");
var interval = null;


function timer(){
    mil++;
    milHeading.innerHTML = mil;
    if(mil >= 100){
        sec++;
        secHeading.innerHTML = sec;
        mil = 0;
    }
    else if(sec >= 60){
        min++;
       minHeading.innerHTML = min;
        sec = 0;
    }
    }
 function start(){
        interval = setInterval(timer,10);
        document.getElementById("start").disabled = true;

     }
     function stop(){
         clearInterval(interval);
         document.getElementById("start").disabled = false;
     }
    function reset(){
        mil =0;
        sec = 0;
        mil = 0;
        milHeading.innerHTML = mil;
        secHeading.innerHTML = sec;
        minHeading.innerHTML = min;
        clearInterval(interval);
        document.getElementById("start").disabled = false;
    }
