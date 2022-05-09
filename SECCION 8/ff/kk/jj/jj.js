// Cree un programa que implemente una función que reciba como argumento un arreglo y retorne la suma de
//los cuadrados de sus elementos, luego, imprima el resultado
let arreglo= [ 1,2,3,4]
let suma =0
for (let j= 0;  j < arreglo.length; j++) {
    suma=suma+arreglo[j]*arreglo[j]
}
console.log(suma);

