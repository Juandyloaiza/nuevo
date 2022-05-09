// ciclo for
//inex es el iterador o variable control del for
// el primer de los tres componentes(separadospor ;)
// del for  es el iterador con su valor inicial 
//el segundo componente es la condicion  la cual sabemos
//cuando dejara de cumplir mientras se cumpla el ciclo se ejecutara
// el tercer componente es la variacion del iterador del for
//lo que hara ue el ciclo deje de ejecutarse alguna vez
for (let index = 0; index <10; index++) {
    console.log (index);
}
console.log ("---------------------------------")
for (let index = 0; index <200; index++) {
    console.log ("hola mundo");
}

// un programa que pidaa 10 letras al usuario y las imprima
console.log ("-----------------------------------------")
for (let index = 15; index < 26; index++) {
    let letra = prompt ("ingrese letra");
    console.log(letra);
    
    
}
console.log ("---------------------------------------");
// un programa que muestre la tabla del 7 del 10 al 50
for (let index = 0; index <101; index++) {
     console.log (index*7);
    
}

for (let index =1; index <101 ; index--) {
    console.log ( index -1);
    
}