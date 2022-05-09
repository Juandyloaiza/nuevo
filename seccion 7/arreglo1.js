//sintaxis
//arreglo vacio este arreglo es flexiblepuede contener
//tantos elementos como se necesiten
/*/
let arreglovacion =[];
//arreglo no vacio . los elelmentosse separan con ,
let arreglo = [0,1,2,3,500,4,5,6];
//operaciones
//lectura para leer un elemento tiene siempre indices
console.log("------------------------------------------------------------");
//lectura del primer elemento,se usan corchetes
console.log("elemento de indice 0: " , arreglo[0]);
console.log("elemento de indice 0: " , arreglo[4]);
/*/
//crear un arreglo con los dias de la semana  asignando
//el indice 0 al domingo luego mostrar todos sus elementos
let diasdelasemanas = ["domingo" , "lunes" , "martes" ,"miercoles" , "jueves" , "viernes" , "sabado"];
console.log ("el 1 dia de la semana es " ,  diasdelasemanas[0]);
console.log("el 2 dia de la semana es " , diasdelasemanas[1]);
console.log("el 3 dia de la semana es " , diasdelasemanas[2]);
console.log("el 4 dia de la semana es " , diasdelasemanas[3]);
console.log("el 5 dia de la semana es " , diasdelasemanas[4]);
console.log("el 6 dia de la semana es " , diasdelasemanas[5]);
console.log("el 7 dia de la semana es " , diasdelasemanas[6]);
//escritura
let arregloSalario =[1000000,18000000,3000000];
// conbinamos el salario de indicendese 1 por 200000
arregloSalario[1] = 2000000;
console.log("Elemento actualizado: " , arregloSalario[1]);
console.log("----------------");
console.log("arreglo actualizado" , arregloSalario);
//uso de puhs para agregar  para agregar elementos a un arreglo
let arregloNombres181 = [];

arregloNombres181.push("pedro");

arregloNombres181.push("juan");

arregloNombres181.push("jaco");

arregloNombres181.push("juandy");

arregloNombres181.push("cristian");

arregloNombres181.push("yuliam");

arregloNombres181.push("heiler");

arregloNombres181.push("daniel");

arregloNombres181.push("nico");

arregloNombres181.push("jose");

arregloNombres181.push("yazury");

console.log("nombres ADSI 181 : " , arregloNombres181);
//insvestigar y aplicar splice al sgiente arreglo para eliminar:
//el elemento de indice 4
//el elemento de indice 3
//el elemento de indice 5
//los sgientes 2 elementos A PARTIR del indice 6

let arregloSplice = [23,45,76,77,23,98,76,90,67];
arregloSplice.splice (4, 1);
arregloSplice.splice (3, 1);
arregloSplice.splice (5, 1);
arregloSplice.splice (6, 3);
console.log("el numero es arreglado" , arregloSplice);

//LONGITUD DE UN ARREGLO 
//LA LONGITUD DE UN ARREGLO ES  LA CCANTIDAD DE ELEMENTOS
//QUE TIENE EL ARREGLO.ES UN NUMERO. PARA ESTO USAMOS. LENGHT
let arregloLongitud = [200, 5, 8, 45, 9, 0];
console.log( "la longitud  del arreglo es: ", arregloLongitud.lenght);