"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Profesor_1 = __importDefault(require("./Profesor"));
class Aula {
    constructor(identificador, capacidadMaxima, materiaDestinada) {
        this.identificador = identificador;
        this.capacidadMaxima = capacidadMaxima;
        this.materiaDestinada = materiaDestinada;
        this.estudiantes = [];
        this.profesor = new Profesor_1.default("Jose Marin", 40, "Masculino", materiaDestinada);
    }
    agregarEstudiante(estudiante) {
        if (this.estudiantes.length < this.capacidadMaxima) {
            this.estudiantes.push(estudiante);
        }
    }
    puedeDarClase() {
        const porcentajeAlumnos = (this.estudiantes.length / this.capacidadMaxima) * 100;
        return (this.profesorDisponible() &&
            this.profesor.getMateria() === this.materiaDestinada &&
            porcentajeAlumnos > 50);
    }
    profesorDisponible() {
        return Math.random() > 0.2;
    }
    mostrarAprobados() {
        const aprobadosHombres = this.estudiantes.filter((estudiante) => estudiante.getSexo() === "Masculino" && estudiante.getCalificacion() >= 5);
        const aprobadosMujeres = this.estudiantes.filter((estudiante) => estudiante.getSexo() === "Femenino" && estudiante.getCalificacion() >= 5);
        console.log(`Aprobados Hombres: ${aprobadosHombres.length}`);
        console.log(`Aprobadas Mujeres: ${aprobadosMujeres.length}`);
    }
    obtenerInformacionProfesor() {
        return `Profesor: ${this.profesor.getNombre()}, Materia: ${this.profesor.getMateria()}`;
    }
}
exports.default = Aula;
