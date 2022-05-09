//programa que pida la nacionalidad  de una persona y su edad y muestre si la persona puede ser presidente de colombia o no tiene que ser mayor a 30 años y ser colobianos
let edad = parseInt(prompt("ingrese su edad"));
let nacionalidad =prompt("ingrese nacionalidad");
let estado = (edad >30 && nacionalidad == "colombiana") ;

console.log("puede ser presidente", estado);
