

var buttons = document.getElementsByTagName('button');

for(var i = 0; i<buttons.length;i++){
    var currentButton = buttons[i];
    currentButton.addEventListener('click',printXorZero);
}

var isGameEnd = false;
var flag = true;
var count = 0;


function reset(){
    clearInterval(interval);
    isGameEnd = false;
    flag = true;
    count = 0;
    countDown = 5;

    for(var i=0;i<buttons.length;i++){
        buttons[i].innerText='';
    }
    document.getElementById("output").innerText = "Start Playing the Game!";
 
}

function isNotBlank(currentButton){
    return currentButton.innerText.trim().length>0;
}

function isThreeSame(first, second, third){
    if(isNotBlank(first)&&isNotBlank(second)&&isNotBlank(third)){
        //checking wheter all three are same
        return (first.innerText == second.innerText && first.innerText == third.innerText)
    }
    return false;
}

function isGameOver(){
    return isThreeSame(buttons[0], buttons[1], buttons[2]) ||
    isThreeSame(buttons[3], buttons[4], buttons[5]) ||
    isThreeSame(buttons[6], buttons[7], buttons[8]) ||
    isThreeSame(buttons[0], buttons[3], buttons[6]) ||
    isThreeSame(buttons[1], buttons[4], buttons[7]) ||
    isThreeSame(buttons[2], buttons[5], buttons[8]) ||
    isThreeSame(buttons[0], buttons[4], buttons[8]) ||
    isThreeSame(buttons[2], buttons[4], buttons[6]);
    
}
var countDown = 5;
var interval;

function waitFor5Sec(){
    //async function
    console.log("Before Reset....")
    interval = setInterval(function(){
        document.getElementById("output").innerText=`Game Over it will resume in ${countDown}`
        countDown--;
    },1000)
    setTimeout(reset,6000);
    console.log("After Reset....")

}

function printXorZero(){
    // using this for calling current object reference
    var currentButton = this;

    console.log("button clicked...")
    // only printing one time x or 0

    if(!isGameEnd && currentButton.innerText.trim().length==0){// it will help to change value 
        count++;
    var value = flag?"X":"0";
    currentButton.innerText = value;
    flag = !flag;

    if(count>4){
        if(isGameOver()){
            isGameEnd = true;
           //alert("game over...");
           //document.getElementById("output").innerText="Game Over.."
           waitFor5Sec();
        }
    }

    }
}