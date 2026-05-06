// Personas
// OK Crear un algoritmo que capture los datos personales de 5 individuos, estos deberan ser: nombre, edad, genero.
// Una ves esten capturados en una lista, vamos a contar cuantos son hombres y cuantos son mujeres.
// Si has logrado realizar los puntos anteriores, vas a modificar el algoritmo de manera que preguntes ¿Cuántas personas deseas registrar?

class Person {
    constructor( nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

const personas = [];

for( let i = 1; i <= 5; i+=1 ) {        // de 5 individuos,
    // Capturar los datos personales
    const nombre = prompt( 'Digite su nombre: ' );                      // nombre, 
    const edad = Number( prompt( nombre + ' digita tu edad: ' ) );      // edad, 
    const genero = prompt( `${ nombre } indica tu genero (f: femenino, m: masculino):` );  // genero.

    const person = new Person(nombre, edad, genero );
    console.log( person );

    personas.push( person );
    console.log( personas );
}


// Iterar todos los objetos en la lista personas con la intencion de contar los hombres y las mujeres
let cantMujeres = 0;
let cantHombres = 0;

console.log( '===== Lista de personas =====' );
for( let i = 0; i < 5; i+=1 ) {
    if( personas[ i ].genero == 'f' ) {
        cantMujeres = cantMujeres + 1;
    }
    if( personas[ i ].genero == 'm' ) {
        cantHombres = cantHombres + 1;
    }
}

console.log(`La cantidad de: \n - mujeres es ${ cantMujeres} \n - hombres es: ${cantHombres }`);