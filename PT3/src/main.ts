import Raices from "./Raices";

// Crear objeto Raices con coeficientes específicos
const ecuacion = new Raices(1, -3, 2);

// Mostrar información y soluciones por consola
console.log("Discriminante:", ecuacion.getDiscriminante());
console.log("¿Tiene raíces?", ecuacion.tieneRaices());
console.log("¿Tiene raíz única?", ecuacion.tieneRaiz());
ecuacion.calcular();
ecuacion.obtenerRaices();
ecuacion.obtenerRaiz();