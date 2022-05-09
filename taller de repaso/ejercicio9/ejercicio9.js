//En una empresa se requiere un sistema de información que registre sus nuevos usuarios. Cada vez
//que un usuario se registra debe introducir los siguientes datos: documento, nombres, apellidos, edad,
//peso, estatura. Cree un sistema de información que reciba los datos de registro de cada cliente por
//teclado, luego de realizado el registro el sistema debe mostrar al usuario el mensaje “Registro exitoso”. Si
//el usuario desea consultar su registro debe poder hacerlo a través de su documento. Use funciones.
let documento = parseInt(prompt("ingrese numero de documento"));
let nombre = (prompt("ingrese su nombre"));
let apellido =(prompt("ingresesu sus apellidos"));
let edad = parseInt(prompt("ingrese su edad"));
let peso = parseInt(prompt("ingrese su peso"));
let estatura= parseInt(prompt("ingrese su estatura"));
console.log("se registro exitosamente");
let arreglo1 = {documento : [nombre,apellido,edad,peso,estatura]} 
let consulta = parseInt(prompt("desea consultar su registro si no"));
let consulta1= parseInt(prompt("ingrese numero de cedula nuevamente"));
if (consulta== "Si") {
    documento={consulta1}
    
}

console.log(arreglo1)