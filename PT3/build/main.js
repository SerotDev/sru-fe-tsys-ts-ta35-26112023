"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Raices_1 = __importDefault(require("./Raices"));
// Crear objeto Raices con coeficientes específicos
const ecuacion = new Raices_1.default(1, -3, 2);
// Mostrar información y soluciones por consola
console.log("Discriminante:", ecuacion.getDiscriminante());
console.log("¿Tiene raíces?", ecuacion.tieneRaices());
console.log("¿Tiene raíz única?", ecuacion.tieneRaiz());
ecuacion.calcular();
ecuacion.obtenerRaices();
ecuacion.obtenerRaiz();
