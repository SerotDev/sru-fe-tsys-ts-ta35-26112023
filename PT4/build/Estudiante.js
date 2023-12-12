"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
class Estudiante extends Persona_1.default {
    constructor(nombre, edad, sexo, calificacion) {
        super(nombre, edad, sexo);
        this.calificacion = Math.min(10, Math.max(0, calificacion));
    }
    getCalificacion() {
        return this.calificacion;
    }
    realizarAccion() {
        console.log("El estudiante está en clase o haciendo novillos.");
    }
}
exports.default = Estudiante;
