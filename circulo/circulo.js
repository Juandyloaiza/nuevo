//cree un programa que tome el radio de un circulo 
// E imprimasu area
let radio = (parseInt(prompt("ingrese radio")));
function area() {
    let area=r * r + 3.1415*a;
    return area;
}
let areaCirculo = (radio);
console.log("el area del Circulo es: ",  areaCirculo);

function peri(p) {
    let perime= 2 * 3.1415*p;
    return perime;
}
let perimetro=peri(radio);
console.log("el perimetro es: ", perimetro);