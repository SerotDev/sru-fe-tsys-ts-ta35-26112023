import Espectador from "./Espectador";

class SalaCine {
    private asientos: { [fila: number]: { [columna: string]: Espectador | null } };
    private filas: number;
    private columnas: string[];

    constructor(filas: number, columnas: string[]) {
        this.filas = filas;
        this.columnas = columnas;
        this.asientos = {};

        // Inicializar la matriz de asientos
        for (let fila = 1; fila <= this.filas; fila++) {
            this.asientos[fila] = {};
            for (const columna of this.columnas) {
                this.asientos[fila][columna] = null;
            }
        }
    }

    sentarEspectador(espectador: Espectador): void {
        // Obtener asiento aleatorio
        let fila = Math.floor(Math.random() * this.filas) + 1;
        let columna = this.columnas[Math.floor(Math.random() * this.columnas.length)];

        // Verificar si el asiento está ocupado
        while (this.asientos[fila][columna] !== null) {
            // Buscar un asiento libre
            fila = Math.floor(Math.random() * this.filas) + 1;
            columna = this.columnas[Math.floor(Math.random() * this.columnas.length)];
        }

        // Sentar al espectador si tiene suficiente dinero y edad para ver la película
        if (espectador.getDinero() > 0 && espectador.getEdad() >= 18) {
            this.asientos[fila][columna] = espectador;
            console.log(
                `${espectador.getNombre()} se ha sentado en el asiento ${fila} ${columna}.`
            );
        } else {
            console.log(
                `${espectador.getNombre()} no cumple con los requisitos y no puede ver la película.`
            );
        }
    }

    mostrarEstado(): void {
        console.log("----- MATRIZ DE ASIENTOS -----");
        for (let fila = this.filas; fila >= 1; fila--) {
            let filaString = `Fila ${fila}  =>  `;
            for (const columna of this.columnas) {
                const espectador = this.asientos[fila][columna];
                if (espectador) {
                    filaString += `X `;
                } else {
                    filaString += `${columna} `;
                }
            }
            console.log(filaString);
        }
        console.log("(Las X son posiciones ocupadas)");
    }
}

export default SalaCine;