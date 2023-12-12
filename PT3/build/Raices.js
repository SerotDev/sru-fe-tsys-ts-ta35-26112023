"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Raices {
    // Constructor que recibe los coeficientes de la ecuación
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    // Método para calcular y obtener el discriminante
    getDiscriminante() {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
    // Método que verifica si la ecuación tiene raíces reales
    tieneRaices() {
        return this.getDiscriminante() >= 0;
    }
    // Método que verifica si la ecuación tiene una única raíz real
    tieneRaiz() {
        return this.getDiscriminante() === 0;
    }
    // Método para calcular y mostrar las soluciones de la ecuación
    calcular() {
        const discriminante = this.getDiscriminante();
        if (discriminante > 0) {
            const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`La ecuación tiene dos soluciones: ${raiz1} y ${raiz2}`);
        }
        else if (discriminante === 0) {
            const raiz = -this.b / (2 * this.a);
            console.log(`La ecuación tiene una única solución: ${raiz}`);
        }
        else {
            console.log('La ecuación no tiene soluciones reales.');
        }
    }
    // Método para obtener y mostrar las dos raíces reales
    obtenerRaices() {
        const discriminante = this.getDiscriminante();
        if (discriminante >= 0) {
            const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`Raíces: ${raiz1} y ${raiz2}`);
        }
        else {
            console.log('La ecuación no tiene soluciones reales.');
        }
    }
    // Método para obtener y mostrar la única raíz real
    obtenerRaiz() {
        const discriminante = this.getDiscriminante();
        if (discriminante === 0) {
            const raiz = -this.b / (2 * this.a);
            console.log(`Raíz única: ${raiz}`);
        }
        else {
            console.log('La ecuación no tiene una única solución real.');
        }
    }
}
exports.default = Raices;
