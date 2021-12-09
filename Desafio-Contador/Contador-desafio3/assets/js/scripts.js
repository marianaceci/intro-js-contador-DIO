var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    seNegativo(currentNumber);     
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    seNegativo(currentNumber);  
}


function seNegativo(currentNumber){
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = 'red';
    }else{
        document.getElementById("currentNumber").style.color = 'black';
    }   
}