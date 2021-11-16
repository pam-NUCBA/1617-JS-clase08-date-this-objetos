//* crear un objeto con new:

let clima = new Object({
  temperatura: 16,
  nubosidad: "baja",
  precipitaciones: false,
});

console.log(typeof clima, clima);

//*en los objetos, no podemos usar push. Push es para arrays.
//varias formas de agregar: la larga es con una funcion:

const addMaxTemp = () => {
  clima.maxima = 18;
  console.log(clima);
};

addMaxTemp();

//una forma más chiquita es esta:
clima["minima"] = 12;
console.log(clima);

//la otra forma corta, sin funcion, sería esta:
clima.humedad = "96%"
console.log(clima)

//*https://www.educative.io/edpresso/how-to-add-property-to-an-object-in-javascript