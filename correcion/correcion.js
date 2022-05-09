let nombre = prompt("ingrese nombre");
let estrato = parseInt(prompt(" ingrese su estrato entre 1-6"));
let antiguedad = parseInt(prompt("ingrese sus anios laborales"));
let subsidio = estrato <= 4 && antiguedad >= 8;

console.log("el empleado",nombre,"tiene derecho a subsidio",subsidio,"no tiene derecho a subsidio",!subsidio);