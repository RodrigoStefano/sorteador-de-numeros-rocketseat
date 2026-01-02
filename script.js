const btnGo = document.getElementById("btn-go");
const amount = document.getElementById("amount");
const startNumber = document.getElementById("start");
const endNumber = document.getElementById("end");

btnGo.addEventListener("click", function (event) {
    event.preventDefault();

    //#region TESTE DE LÓGIA //
    
    const amountValue = parseInt(amount.value);
    const startValue = parseInt(startNumber.value);
    const endValue = parseInt(endNumber.value);

    if (isNaN(amountValue) || isNaN(startValue) || isNaN(endValue)) {
        alert("Por favor, preencha todos os campos com números válidos.");
        return;
    }

    if (startValue >= endValue) {
        alert("O valor inicial deve ser menor que o valor final.");
        return;
    }

    const range = endValue - startValue + 1;
    if (amountValue > range) {
        alert("A quantidade de números sorteados não pode ser maior que o intervalo.");
        return;
    }
    const results = new Set();
    while (results.size < amountValue) {
        const randomNum = Math.floor(Math.random() * range) + startValue;
        results.add(randomNum);
    }
    alert("Números sorteados: " + Array.from(results).join(", "));
    
    //#endregion
});