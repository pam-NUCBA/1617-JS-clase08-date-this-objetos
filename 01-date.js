//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
// *https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor
//* https://www.w3schools.com/jsref/jsref_obj_date.asp

//con new:
const newDate = new Date();
console.log("new date:", newDate);

//* https://www.epochconverter.com/
//fecha en formato unix:
const now = Date.now();
console.log("con now", now);

console.log("con Parse:", Date.parse("Dec 25, 1995")); //devuelve en milisegundos (podemos comprobarlo en el epoch converter!)

//*año y mes son obligatorios! todos los demás son optativos
console.log("con UTC:", Date.UTC(2001, 0, 16, 15, 12, 10, 130)); // puede ser una fecha que ya pasó
console.log("con UTC:", Date.UTC(2041, 0, 16, 15, 12, 10, 130)); // o una fecha que todavía no
console.log("con UTC:", Date.UTC(69, 0, 16, 15, 12, 10, 130)); // y si no ponemos delante los primeros dos números, asume que el año es entre 1900 y 1999. Si es menor a 1970, da negativos!

//*conseguir la fecha en epoch:
console.log('fecha en epoch', Math.floor(new Date().getTime()) / 1000.0);
