import Persona from "./Persona";

class Estudiante extends Persona {
    private calificacion: number;

    constructor(nombre: string, edad: number, sexo: string, calificacion: number) {
        super(nombre, edad, sexo);
        this.calificacion = Math.min(10, Math.max(0, calificacion));
    }

    getCalificacion(): number {
        return this.calificacion;
    }

    realizarAccion(): void {
        console.log("El estudiante está en clase o haciendo novillos.");
    }
}

export default Estudiante;