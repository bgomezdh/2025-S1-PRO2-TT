/* modulos de terceros moment*/
const moment = require('moment');

let horaActual = moment().format(); //2025-02-24 18:02:56

console.log(horaActual);

/* modulos propios */
const calculadora = require('./modulos_propios/calculadora');


console.log(calculadora.multiplicar(5,7));

console.log(calculadora.sumar(3,7));

/* modulo de peliculas */
const pmq = require('popular-movie-quotes');

pmq.

let fraseEncontrada = pmq.getRandomQuote();

console.log(fraseEncontrada);
