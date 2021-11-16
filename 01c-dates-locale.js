//* este hilo de stack overflow se lo tatúan en el brazo: https://stackoverflow.com/questions/2388115/get-locale-short-date-format-using-javascript

const d = new Date()
//va a devolver: 2021-11-15T23:21:30.715Z
console.log('tal como sale sin parametros!', d)

//mes-dia-año, hora local:  11/15/2021, 8:24:03 PM
const toLocale = date => console.log('to locale', date.toLocaleString())
toLocale(d)

//*con estos parámetros va a armar la fecha:
let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    //*podemos pasar cuantos parámetros necesitemos!
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric"
}

const toLocaleConParams = date => {
    //es es el idioma, options son los parámetros para la conversión que va a hacer!
    console.log('to locale con params', date.toLocaleDateString("es", options))
}
// devuelve lunes, 15 de noviembre de 2021
toLocaleConParams(d)