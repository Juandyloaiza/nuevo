//Crear otro arreglo que sea idéntico al arreglo dado, pero con todos los elementos incrementados en 1.
////Para esto debe usar ciclo for y a través de iteraciones ir formando el nuevo arreglo con sus elementos tal cual se piden
let arreglo2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
let copia = [];
for (let i = 0; i < arreglo2.length; i++){
    let array = []
    for (let j = 0; j < arreglo2[i].length; j++){
        array.push (arreglo2[i][j]+1)
        console.log(copia);
    }
} 
