"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Libro_1 = __importDefault(require("./Libro"));
// Crear objetos Libro
const libro1 = new Libro_1.default("123456789", "Libro 1", "Autor 1", 200);
const libro2 = new Libro_1.default("987654321", "Libro 2", "Autor 2", 300);
// Mostrar información por pantalla
console.log(libro1.toString());
console.log(libro2.toString());
// Indicar cuál de los 2 libros tiene más páginas
const libroConMasPaginas = libro1.getNumPaginas() > libro2.getNumPaginas() ? libro1 : libro2;
console.log(`El libro con más páginas es: ${libroConMasPaginas.getTitulo()}`);
