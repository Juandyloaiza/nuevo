//CICLO WIHLE: LO USAMOS CUANDO NO SABEMOS 
//EL NUMERO DE ITERACIONES QUE TEMDRA EL CICLO.
//ESTE CICLO DEPENDE DE UNA CONDICION SEA VERDADERA EL CICLO.
// SE EJECUTARA SES DEBE IMPLEMENTAR UNA VARIABLE 
//DEL CONTROL DEL CICLO LA CUAL GARANTIZA QUE 
//EL CICLO ALGUNA VEZ NO SE CUMPLA QUE SEA FALSES QUE

//-/CICLO QUE IMPRIME LOS NUMEROS DEL 0 AL 9
let control=0

while (control <=9) {
    console.log(control);
    control++;
    
}
//un programa que pida letras al usuarios del control
//las imprima y dje  de pedirles si el usuario 
// introduce que
// aca la variable control es letra 
let letra = prompt ("ingrese letra");

while (letra != "q") {
    console.log("letra : ", letra)
    letra = prompt ("ingrese letra");
}
console.log("fin")