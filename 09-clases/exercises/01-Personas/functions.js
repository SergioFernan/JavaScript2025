import Person from "./Person.js";


const capturarDatos = ( cantidadCiclos ) => {
    const personas = [];

    for( let i = 1; i <= cantidadCiclos; i+=1 ) {        // de 5 individuos,
        // Capturar los datos personales
        const nombre = prompt( 'Digite su nombre: ' );                      // nombre, 
        const edad = Number( prompt( nombre + ' digita tu edad: ' ) );      // edad, 
        const genero = prompt( `${ nombre } indica tu genero (f: femenino, m: masculino):` );  // genero.

        const person = new Person(nombre, edad, genero );
        console.log( person );

        personas.push( person );
        console.log( personas );
    }

    return personas;
}

function contarGenero( personas ) {
    // Iterar todos los objetos en la lista personas con la intencion de contar los hombres y las mujeres
    let cantMujeres = 0;
    let cantHombres = 0;

    console.log( '===== Lista de personas =====' );
    for( let i = 0; i < personas.length; i+=1 ) {
        if( personas[ i ].genero == 'f' ) {
            cantMujeres = cantMujeres + 1;
        }
        if( personas[ i ].genero == 'm' ) {
            cantHombres = cantHombres + 1;
        }
    }

    return { cantMujeres, cantHombres } ;
    
}


// Exportar las funciones para que puedan ser utilizadas en otros archivos
export {  
    capturarDatos,
    contarGenero
};