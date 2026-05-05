// Estructura estatica de un objeto explicito
const katherin = {
  colorOjos: "verdes",
  saludar: function () {
    console.log(`Hola mis ojos${this.colorOjos}`);
  },
}; // Se ejecuta el constructor

const amed = {
  color: "verdes",
};

// Estructura para crear objetos de forma dinamica
class Persona {
  // Propiedades (Niveles de Accesibilidad: public, private, protected)
  #ojos;
  barba;
  genero;

  // Metodo Constructor:
  constructor(colorOjos, tieneBarba, genero = "masculino") {
    this.#ojos = colorOjos;
    this.barba = tieneBarba;
    this.genero = genero;
    // console.log( 'Hola soy el constructor' );
  }

  // Metodos Getters y Setters
  getOjos() {
    return this.#ojos;
  }
  setOjos(nuevoColorOjos) {
    this.#ojos = nuevoColorOjos;
  }

  // Forma Nueva de Escribir un Getter y Setter: 
  // Se define como una funcion, pero se comporta como un atributo
  get eyeColor() {
    return this.#ojos;
  }
  set eyeColor( nuevoColorOjos ) {
    this.#ojos = nuevoColorOjos;
  }

  // Metodos
  saludar() {
    console.log(`Hola mis ojos son ${this.ojos}`);
  }
}

const jose = new Persona("verdes", false);

// console.log( jose.getOjos() );
// jose.setOjos( 'Azul' );
jose.eyeColor = 'Azul';         // SET

console.log( jose.eyeColor );   // GET

