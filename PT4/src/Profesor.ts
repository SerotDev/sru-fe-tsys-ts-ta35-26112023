import Persona from "./Persona";

class Profesor extends Persona {
    private materia: string;

    constructor(nombre: string, edad: number, sexo: string, materia: string) {
        super(nombre, edad, sexo);
        this.materia = materia;
    }

    getMateria(): string {
        return this.materia;
    }

    realizarAccion(): void {
        console.log("El profesor está dando clase o no está disponible.");
    }
}

export default Profesor;