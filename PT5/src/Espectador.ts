class Espectador {
    private nombre: string;
    private edad: number;
    private dinero: number;

    constructor(nombre: string, edad: number, dinero: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }

    getNombre(): string {
        return this.nombre;
    }

    getEdad(): number {
        return this.edad;
    }

    getDinero(): number {
        return this.dinero;
    }
}

export default Espectador;