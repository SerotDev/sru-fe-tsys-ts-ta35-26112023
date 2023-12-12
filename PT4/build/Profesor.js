"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
class Profesor extends Persona_1.default {
    constructor(nombre, edad, sexo, materia) {
        super(nombre, edad, sexo);
        this.materia = materia;
    }
    getMateria() {
        return this.materia;
    }
    realizarAccion() {
        console.log("El profesor está dando clase o no está disponible.");
    }
}
exports.default = Profesor;
