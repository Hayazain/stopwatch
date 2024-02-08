var seconds = 0;
var minutes = 0;
var hours = 0;
var interval;

var gethrs = document.getElementById("hrs");
var getmins = document.getElementById("mins");
var getsecs = document.getElementById("secs");

function start(){
interval = setInterval(function(){
    seconds++
    getsecs.innerHTML = seconds
    if(seconds >= 100){
        minutes++
        getmins.innerHTML = minutes
        seconds = 0
    }
    else if(minutes >=60){
        hours++
        gethrs.innerHTML=hours
        minutes=0
    }
},10)

document.getElementById('abc').disabled = true
}

function stop(){
    clearInterval(interval)
    document.getElementById('abc').disabled = false
}

function reset(){
 seconds = 0;
 minutes = 0;
 hours = 0;

 gethrs.innerHTML =  hours
 getmins.innerHTML = minutes
 getsecs.innerHTML = seconds

}