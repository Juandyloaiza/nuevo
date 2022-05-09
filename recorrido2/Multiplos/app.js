const numero = document.getElementById("numero");
const texto = document.getElementById("texto");
const btnImprimir = document.getElementById("imprimir");

btnImprimir.addEventListener("click", multiplos);

function multiplos() {
    let array = [];
    let multiplo = numero.value;
    for (let i = 0; i < 100; i++) {
        if (i % multiplo === 0) {
            array.push(i);

        }
    }
    texto.textContent = `Los numeros primos de `
    
}