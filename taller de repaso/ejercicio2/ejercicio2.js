// Cree una función que reciba como argumentos dos números y retorne el mayor de estos números,
//luego haga el llamado a la función y guarde su valor de retorno en una variable e imprima ese valor por
//consola.
let num1 = parseFloat (prompt("Ingrese un numero "));
let num2 = parseFloat (prompt("Ingrese otro numero "));
function mayor(num1,num2) {
    if (num1>num2) {
        console.log("numero1 es mayor");
    }else{
        console.log("el numero 2 es mayor")
    }
    
}

let resultado1= mayor(num1,num2) ;
