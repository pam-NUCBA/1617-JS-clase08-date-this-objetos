//*imprimir toda la tabla del 5:

for (let i = 0; i <= 10; i++) {
  //va a ser igual a 5 una sola vez, a la siguiente vuelta es 6!
  for (let j = 5; j <= 5; j++) {
    console.log(`${j} x ${i} = ${j * i}`);
  }
}

//*hace lo de adentro hasta que la condición sea FALSE, va a la de afuera, si afuera es TRUE, entra a la de adentro, QUE DE NUEVO ES 0, hasta que sea falsa, y repite el loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`j es ${j}, i es ${i}`);
  }
}
