// Personas
// OK Crear un algoritmo que capture los datos personales de 5 individuos, estos deberan ser: nombre, edad, genero.
// Una ves esten capturados en una lista, vamos a contar cuantos son hombres y cuantos son mujeres.
// Si has logrado realizar los puntos anteriores, vas a modificar el algoritmo de manera que preguntes ¿Cuántas personas deseas registrar?

import { capturarDatos, contarGenero } from './functions.js';

const cantidadPersonas = prompt( '¿Cuantas personas deseas registrar?' );
const personas = capturarDatos( cantidadPersonas );


// Desestructuracion
const { cantMujeres, cantHombres } = contarGenero( personas );  //  { cantMujeres, cantHombres }

console.log(`La cantidad de: \n - mujeres es ${ cantMujeres }\n - hombres es ${ cantHombres }`);
