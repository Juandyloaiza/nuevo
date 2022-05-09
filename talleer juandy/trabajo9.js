let documento=parseInt(prompt("ingrese su documento"));
let nombre=(prompt("ingrese sus nombres"));
let appellidos=(prompt("ingrese sus apellidos "));
let edad=parseInt(prompt("ingrese su edad"));
let peso=parseInt(prompt("ingrese su peso"));
let estatura=parseFloat(prompt("ingrese su estatura"));


console.log("su registro fue exitoso  ");
console.log("_____________________________________________");
console.log("¿quieres consultar?");


        


let diccionario1 = {documento:[nombre,appellidos,edad,peso,estatura]};

let consulta=prompt("quiere consultar escriba si o no");

    if (consulta=="si") {
     let registro2=prompt("ingrese su documento");
    diccionario1[registro2];
     console.log(diccionario1);
    }


