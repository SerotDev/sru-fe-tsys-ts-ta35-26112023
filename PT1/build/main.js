"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Serie_1 = __importDefault(require("./Serie"));
const Videojuego_1 = __importDefault(require("./Videojuego"));
// Crear arrays de Series y Videojuegos
const series = [
    new Serie_1.default("Serie 1", "Creador 1"),
    new Serie_1.default("Serie 2", "Creador 2"),
    new Serie_1.default("Serie 3", "Creador 3"),
    new Serie_1.default("Serie 4", "Creador 4"),
    new Serie_1.default("Serie 5", "Creador 5"),
];
const videojuegos = [
    new Videojuego_1.default("Videojuego 1", 20, "Aventura", "CompañíaXYZ"),
    new Videojuego_1.default("Videojuego 2", 30, "Acción", "CompañíaABC"),
    new Videojuego_1.default("Videojuego 3", 15, "Estrategia", "Compañía123"),
    new Videojuego_1.default("Videojuego 4", 25, "Deportes", "Compañía456"),
    new Videojuego_1.default("Videojuego 5", 40, "RPG", "Compañía789"),
];
// Entregar algunos Videojuegos y Series
series[0].entregar();
series[1].entregar();
series[4].entregar();
videojuegos[2].entregar();
videojuegos[3].entregar();
videojuegos[4].entregar();
// Contar y devolver Series y Videojuegos entregados
function contarEntregados(arr) {
    const entregados = arr.filter((item) => item.isEntregado());
    entregados.forEach((item) => item.devolver());
    return entregados;
}
const seriesEntregadas = contarEntregados(series);
const videojuegosEntregados = contarEntregados(videojuegos);
// Encontrar Videojuego con más horas estimadas
const videojuegoMasHoras = videojuegos.reduce((prev, current) => prev.getHorasEstimadas() > current.getHorasEstimadas() ? prev : current);
// Encontrar Serie con más temporadas
const serieMasTemporadas = series.reduce((prev, current) => prev.getNumeroTemporadas() > current.getNumeroTemporadas() ? prev : current);
// Mostrar información en pantalla
console.log("Series Entregadas:", seriesEntregadas.map((serie) => serie.toString()));
console.log("Videojuegos Entregados:", videojuegosEntregados.map((videojuego) => videojuego.toString()));
console.log("Videojuego con más horas estimadas:", videojuegoMasHoras.toString());
console.log("Serie con más temporadas:", serieMasTemporadas.toString());
