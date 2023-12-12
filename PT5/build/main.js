"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Espectador_1 = __importDefault(require("./Espectador"));
const SalaCine_1 = __importDefault(require("./SalaCine"));
// Crear una sala de cine con 8 filas y columnas de la A a la I
const salaCine = new SalaCine_1.default(8, ["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
// Simular 20 espectadores
const espectadores = [];
for (let i = 1; i <= 20; i++) {
    const nombre = `Espectador${i}`;
    const edad = Math.floor(Math.random() * 30) + 10; // Edad aleatoria entre 10 y 40
    const dinero = Math.floor(Math.random() * 30) + 10; // Dinero aleatorio entre 10 y 40
    const espectador = new Espectador_1.default(nombre, edad, dinero);
    espectadores.push(espectador);
}
// Sentar a cada espectador en la sala de cine
for (const espectador of espectadores) {
    salaCine.sentarEspectador(espectador);
}
// Mostrar el estado final de la sala de cine
salaCine.mostrarEstado();
