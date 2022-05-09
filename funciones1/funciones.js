//sintaxis de una funcion en javascript
//se une la palabra RESERVADA FUNCTION,seguida
//de el nombre de la funcion en  la cual debe enpezar
//por minusculas y usar notacion lowercamelcase
//luego se sigue conb parentesis donde iran los
//parametros tiene) de la funcion,
//luego llaves que se la funcion
//contendran el bloque  por ultimo
//el retorno si es que tiene.

//funcion que recibe un numero y retorna su cuadrado

function cuadradoNumero(numero) {
    let cuadrado = numero * numero;
    return cuadrado;
}
let n = parseFloat(prompt ("ingrese numero"));
let valor = cuadradoNumero(n);
console.log("el numero elevado al cuadrado es: ",  valor);

//funcion con dos argumentos
//funcion que retorna la suma dos numeros
let numeroA = parseFloat(prompt ("ingrese numeroA"))
let numeroB = parseFloat(prompt ("ingrese numeroB"))
function suma (a,b) {
    let sumaNumeros = a + b;
    return sumaNumeros;
}
let total = suma (numeroA, numeroB);
console.log ("la suma total");