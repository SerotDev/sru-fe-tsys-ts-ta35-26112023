"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Serie {
    constructor(titulo, creador) {
        this.titulo = titulo;
        this.numeroTemporadas = 3;
        this.entregado = false;
        this.genero = "Sin especificar";
        this.creador = creador;
    }
    // Métodos getters
    getTitulo() {
        return this.titulo;
    }
    getNumeroTemporadas() {
        return this.numeroTemporadas;
    }
    getEntregado() {
        return this.entregado;
    }
    getGenero() {
        return this.genero;
    }
    getCreador() {
        return this.creador;
    }
    // Métodos setters
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setNumeroTemporadas(numeroTemporadas) {
        this.numeroTemporadas = numeroTemporadas;
    }
    setEntregado(entregado) {
        this.entregado = entregado;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCreador(creador) {
        this.creador = creador;
    }
    // Método toString
    toString() {
        return `Título: ${this.titulo}, Temporadas: ${this.numeroTemporadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Creador: ${this.creador}`;
    }
    // Métodos de la interfaz Entregable
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    compareTo(a) {
        if (a instanceof Serie) {
            // Comparar por número de temporadas
            return this.numeroTemporadas - a.getNumeroTemporadas();
        }
        // Otros casos o tipos de objetos pueden ser manejados según la necesidad
        return 0;
    }
}
exports.default = Serie;
