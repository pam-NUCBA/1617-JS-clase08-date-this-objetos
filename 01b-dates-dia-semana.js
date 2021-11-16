//*constructor días de semana:
const weekday = new Array(7)
//acá todavía hay 7 elementos vacíos!
console.log(weekday)

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

console.log(weekday)

//con esto sabe qué día es hoy
const day = new Date()

//*nos toma la posición en el array del día que es:
let d = weekday[day.getDay()] //le digo que me devuelva QUÉ ESTÁ EN ESA POSICION
console.log(d)

let daySinWeek = day.getDay()
console.log(daySinWeek) //nos devuelve LA POSICION! 