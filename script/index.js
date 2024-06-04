let Btn = document.getElementById("calc");
let amountInput = document.getElementById("amount");
let rateInput = document.getElementById("rate");
let result = document.getElementById("result");

Btn.addEventListener('click', ()=>{
    result.innerText = (amountInput.value*rateInput.value)/100
})
