//en un colegio pida el nombre del estudiante, el estrato y la edad, si el estrato es menor 3 y la edad mayor a 14 entonces reciben almuerzo, 
//debe haber un rango socio-economico de 1-6.
let nombre = prompt ("ingrese su nombre");
let edad = parseInt(prompt("ingrese su edad"));
let estrato = parseInt(prompt(" ingrese su estrato"));
let almuerzo = (estrato <=3 && edad >=14);

console.log("el alumno", nombre ,"tiene derecho a almuerzo", almuerzo);