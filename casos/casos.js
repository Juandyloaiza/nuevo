let estrato = parseInt(prompt("ingrese estrato"));
/*/
if (estrato ==1){console.log("su estrato es 1");};
if (estrato ==2){console.log("su estrato es 2");};
if (estrato ==3){console.log("su estrato es 3");};
if (estrato ==4){console.log("su estrato es 4");};
let aux = 60;
if (estrato ==5){console.log("su estrato es 5");};
if (estrato ==6){console.log("su estrato es 6");};
/*/
//version switch-case
//pasamos al switch la avriable estrato
switch (estrato) {
    case 1:
        console.log("su estrato es 1");
            break;
        case 2:
            console.log("su estrato es 2");
            break;
        case 3:
            console.log("su estrato es 3");
            break;
        case 4:
            console.log("su estrato es 4");
            break;
        case 5:
            console.log("su estrato es 5");
            break;
        case 6:
            console.log("su estrato es 6");
            break;

    default:
        console.log("ingrese un estrato de 1-6");
        break;
}