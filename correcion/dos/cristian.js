//el supermercado busca cajeros que permita leer su nombre, estrato y experiencia con un estrato socio-economico de 2 o menos, y debe de tener como minimo 4 años de expieriencia
let nombre = prompt("ingrese su nombre");
let estrato = parseInt(prompt("ingrese su estrato"));
let esperiencia = parseInt(prompt("ingrese sus anos laborales"));
let supermercado = (estrato <=2 && esperiencia >=4);
console.log("el usuario",nombre,"con anos de esperiencia",esperiencia,"es admitida",supermercado);