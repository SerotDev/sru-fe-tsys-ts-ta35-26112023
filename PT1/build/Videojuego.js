"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Videojuego {
    constructor(titulo, horasEstimadas, genero, compañia) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas || 10;
        this.entregado = false;
        this.genero = genero || "Sin especificar";
        this.compañia = compañia || "Sin especificar";
    }
    // Métodos getters
    getTitulo() {
        return this.titulo;
    }
    getHorasEstimadas() {
        return this.horasEstimadas;
    }
    getEntregado() {
        return this.entregado;
    }
    getGenero() {
        return this.genero;
    }
    getCompañia() {
        return this.compañia;
    }
    // Métodos setters
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setHorasEstimadas(horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    }
    setEntregado(entregado) {
        this.entregado = entregado;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCompañia(compañia) {
        this.compañia = compañia;
    }
    // Método toString
    toString() {
        return `Título: ${this.titulo}, Horas Estimadas: ${this.horasEstimadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Compañía: ${this.compañia}`;
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
        if (a instanceof Videojuego) {
            // Comparar por horas estimadas
            return this.horasEstimadas - a.getHorasEstimadas();
        }
        // Otros casos o tipos de objetos pueden ser manejados según la necesidad
        return 0;
    }
}
exports.default = Videojuego;
