var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

var botaoSubtrai = document.querySelector("#subtrai");
botaoSubtrai.addEventListener("click", function(event){
    event.preventDefault();

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
})

var botaoSoma = document.querySelector("#soma");
botaoSoma.addEventListener("click", function(event){
    event.preventDefault();

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
})
