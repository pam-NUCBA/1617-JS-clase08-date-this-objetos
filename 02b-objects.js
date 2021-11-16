//*https://www.w3schools.com/js/js_this.asp
//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//*https://www.youtube.com/watch?v=gvicrj31JOM => mosh es lo MAS, es el más claro explicando.
//*https://somospnt.com/blog/207-funciones-flecha-vs-funciones-regulares

const gato = {
  raza: "común europeo",
  nombre: "Golosina",
  color: "naranja a rayas",
  edad: 12,
  patas: 3,
  castrado: true,
  //nuestro primer this!
  descripcion: function () {
    console.log(`este gato se llama ${nombre}`); //nombre no está definido!
  },
  descripcion2: function () {
    console.log(`este gato se llama ${this.nombre}`); // this, en este caso, se refiere al objeto en que estamos. En contexto
  },
  // quiero usar flechas! bueno, no.
  caracteristicas: () => console.log(`Este gato tiene ${this.edad}`), //la flecha no encontró el contexto! Da undefined
  caracteristicas2: () => console.log(`Este gato tiene ${edad}`), //la flecha no encontró el contexto! va a romper
  //* única forma en que podríamos usar flecha, es dentro de una funcion normal:
  edades: function () {
      //la flecha anda solo estando dentro de una funcion tradicional, Y REQUIERE EL THIS Y SER EJECUTADA
    const edadDelGato = () => {
      console.log(this.edad);
    };
    edadDelGato();
  },
};

// gato.descripcion() // da error
gato.descripcion2(); //la única que va a andar!
// gato.caracteristicas() //da undefined
//gato.caracteristicas2() // da error!

//* BÁSICAMENTE, SOLO PODEMOS CON FUNCTION(){} y con el this

//* la única forma de usar la flecha es esta, y en general no justifica excepto casos muuuy puntuales
gato.edades();
