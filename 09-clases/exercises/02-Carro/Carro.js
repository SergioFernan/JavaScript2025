class Carro {
    constructor() {
        this.velocidad = 0;
        this.estaEncendido = false;
        this.cajaCambios = ['N', '1', '2', '3', '4', '5', 'R'];
        //                   0    1    2    3    4    5    6
        this.cambio = 0;
        this.conGasolina = true;
    }

    frenar() {
        if( this.conGasolina && this.estaEncendido && this.velocidad > 0 ) {
            this.velocidad--;
        }
    }

    acelerar() {
        if( this.conGasolina && this.estaEncendido && this.cambio != 'N' ) {
            this.velocidad++;
        }
    }

    encender() {
        this.estaEncendido = true;
    }

    apagar() {  
        this.estaEncendido = false;
    }

    cambioArriba () {

    }
}