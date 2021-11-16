//* https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object/50941117

//*qué pasa si queremos acceder a la key y mostrarla con una funcion? bueno, acá vuelve nuestro amigo this

const clima = {
  temperatura: 16,
  nubosidad: "baja",
  precipitaciones: true,
  climate: function () {
    console.log(
      `Hoy hace ${this.temperatura}º, la ${Object.keys(this)[1]} es ${
        this.nubosidad
      } y el riesgo de ${Object.keys(this)[2]} es ${
        this.precipitaciones === false ? "nulo" : "alto"
      }.
    `
    );
  },
};

clima.climate();
