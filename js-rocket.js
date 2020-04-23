var timer = null;


var changeToState = function(state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    var countdownNumber = 10
    document.getElementById("countdown").innerHTML = countdownNumber;
    
    
    if (state == 2){

    timer = setInterval(() => {  
        
        countdownNumber = countdownNumber - 1
        
        document.getElementById("countdown").innerHTML = countdownNumber;
    
    
        if (countdownNumber <= 0){
            changeToState(3);
        }
    }, 1000);
} else if (state == 3) {
    var success = setTimeout( function () {
        var randomNumber = Math.round(Math.random()*10)
        console.log("random Number: " + randomNumber)
        //success
        if (randomNumber > 5) {
            changeToState(4);
            //do something 
        }else {
            changeToState(5);
            //do something else 
        }
    }, 4000);
}
}
