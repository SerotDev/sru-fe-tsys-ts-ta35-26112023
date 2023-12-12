import Estudiante from "./Estudiante";
import Profesor from "./Profesor";

class Aula {
    private identificador: number;
    private capacidadMaxima: number;
    private materiaDestinada: string;
    private estudiantes: Estudiante[];
    private profesor: Profesor;

    constructor(identificador: number, capacidadMaxima: number, materiaDestinada: string) {
        this.identificador = identificador;
        this.capacidadMaxima = capacidadMaxima;
        this.materiaDestinada = materiaDestinada;
        this.estudiantes = [];
        this.profesor = new Profesor("Jose Marin", 40, "Masculino", materiaDestinada);
    }

    agregarEstudiante(estudiante: Estudiante): void {
        if (this.estudiantes.length < this.capacidadMaxima) {
            this.estudiantes.push(estudiante);
        }
    }

    puedeDarClase(): boolean {
        const porcentajeAlumnos = (this.estudiantes.length / this.capacidadMaxima) * 100;
        return (
            this.profesorDisponible() &&
            this.profesor.getMateria() === this.materiaDestinada &&
            porcentajeAlumnos > 50
        );
    }

    private profesorDisponible(): boolean {
        return Math.random() > 0.2;
    }

    mostrarAprobados(): void {
        const aprobadosHombres = this.estudiantes.filter(
            (estudiante) => estudiante.getSexo() === "Masculino" && estudiante.getCalificacion() >= 5
        );
        const aprobadosMujeres = this.estudiantes.filter(
            (estudiante) => estudiante.getSexo() === "Femenino" && estudiante.getCalificacion() >= 5
        );

        console.log(`Aprobados Hombres: ${aprobadosHombres.length}`);
        console.log(`Aprobadas Mujeres: ${aprobadosMujeres.length}`);
    }

    obtenerInformacionProfesor(): string {
        return `Profesor: ${this.profesor.getNombre()}, Materia: ${this.profesor.getMateria()}`;
    }
}

export default Aula;