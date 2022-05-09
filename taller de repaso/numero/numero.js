//Cree una función que reciba como argumentos dos números y retorne el mayor de estos números,
//luego haga el llamado a la función y guarde su valor de retorno en una variable e imprima ese valor por
//consola
let num1 = parseInt(prompt("ingrese numero"));
let num2 = parseInt(prompt("ingrese numero"));

function mayor(num1,num2) {
    let mayor= num1>num2; 
    return mayor;
    
}
let total= mayor(num1,num2);
console.log("numero1 es mayor", total);
function mayor2(num1,num2) {
    let mayor2= num2>num1;
    return mayor2;
    
}
let total2= mayor2(num1,num2);
console.log("numero2 es menor", total2);
console.log("son iguales", num1==num2);

