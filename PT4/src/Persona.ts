class Persona {
    private nombre: string;
    private edad: number;
    private sexo: string;

    constructor(nombre: string, edad: number, sexo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    getNombre(): string {
        return this.nombre;
    }

    getEdad(): number {
        return this.edad;
    }

    getSexo(): string {
        return this.sexo;
    }
}

export default Persona;