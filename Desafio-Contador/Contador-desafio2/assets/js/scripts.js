var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

var botaoSubtrai = document.querySelector("#subtrai");
botaoSubtrai.addEventListener("click", function(event){

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    menorQueZero(currentNumber);
    maiorQueDez(currentNumber);
})

var botaoSoma = document.querySelector("#soma");
botaoSoma.addEventListener("click", function(event){

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    menorQueZero(currentNumber);
    maiorQueDez(currentNumber);
})

function menorQueZero(currentNumber){
    if(currentNumber > 0){
        document.getElementById("subtrai").disabled = false;
    }else{
        document.getElementById("subtrai").disabled = true;
    }
}

function maiorQueDez(currentNumber){
    if(currentNumber < 10){
        document.getElementById("soma").disabled = false;
    }else{
        document.getElementById("soma").disabled = true;
    }
}