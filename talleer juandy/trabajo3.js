let arreglo=[1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
       }


        //parte 2
        let arreglo1=[1,2,3,4,5,6,7,8,9,10];
        arreglo1.forEach((numero, index) => {
            console.log('Indice: ' + index + ' Valor: ' + numero);
        });