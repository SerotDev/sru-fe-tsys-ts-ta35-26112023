import Espectador from "./Espectador";
import SalaCine from "./SalaCine";

// Crear una sala de cine con 8 filas y columnas de la A a la I
const salaCine = new SalaCine(8, ["A", "B", "C", "D", "E", "F", "G", "H", "I"]);


// Simular 20 espectadores
const espectadores = [];
for (let i = 1; i <= 20; i++) {
    const nombre = `Espectador${i}`;
    const edad = Math.floor(Math.random() * 30) + 10; // Edad aleatoria entre 10 y 40
    const dinero = Math.floor(Math.random() * 30) + 10; // Dinero aleatorio entre 10 y 40
    const espectador = new Espectador(nombre, edad, dinero);
    espectadores.push(espectador);
}

// Sentar a cada espectador en la sala de cine
for (const espectador of espectadores) {
    salaCine.sentarEspectador(espectador);
}

// Mostrar el estado final de la sala de cine
salaCine.mostrarEstado();
