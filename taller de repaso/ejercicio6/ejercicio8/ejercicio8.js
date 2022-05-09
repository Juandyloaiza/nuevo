//8. Dado el siguiente arreglo [1, 2, 3, 4, 500, 420, -100] elimine el elemento de índice 4 usando splice,
//elimine el último elemento usando pop, agregue el elemento 520 usando push. Finalmente, haga una
//copia “independiente del arreglo” usando slice

//eliminando con splice
let arreglo1 = [1, 2, 3, 4, 500, 420, -100]
arreglo1.splice(4,2);
console.log(arreglo1);






let arreglo2 = [1, 2, 3, 4, 500, 420, -100]
var eliminar2 = arreglo2.pop();
console.log("el arreglo eliminando el ultimo elemento es :",eliminar2)



let arreglo3 = [1, 2, 3, 4, 500, 420, -100]
arreglo3.push(520);
console.log(arreglo3)

//copia usando slice

let arreglo4 = [1, 2, 3, 4, 500, 420, -100]
let copia = arreglo4.slice();
arreglo4[2]=200
console.log("copia del arreglo: ",copia);
console.log("arreglo original: ",arreglo4)