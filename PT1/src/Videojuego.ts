import Entregable from './IEntregable';

class Videojuego implements Entregable {
    private titulo: string;
    private horasEstimadas: number;
    private entregado: boolean;
    private genero: string;
    private compañia: string;

    constructor(titulo: string, horasEstimadas: number, genero: string, compañia: string) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas || 10;
        this.entregado = false;
        this.genero = genero || "Sin especificar";
        this.compañia = compañia || "Sin especificar";
    }

    // Métodos getters
    getTitulo(): string {
        return this.titulo;
    }

    getHorasEstimadas(): number {
        return this.horasEstimadas;
    }

    getEntregado(): boolean {
        return this.entregado;
    }

    getGenero(): string {
        return this.genero;
    }

    getCompañia(): string {
        return this.compañia;
    }

    // Métodos setters
    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    setHorasEstimadas(horasEstimadas: number): void {
        this.horasEstimadas = horasEstimadas;
    }

    setEntregado(entregado: boolean): void {
        this.entregado = entregado;
    }

    setGenero(genero: string): void {
        this.genero = genero;
    }

    setCompañia(compañia: string): void {
        this.compañia = compañia;
    }

    // Método toString
    toString(): string {
        return `Título: ${this.titulo}, Horas Estimadas: ${this.horasEstimadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Compañía: ${this.compañia}`;
    }

    // Métodos de la interfaz Entregable
    entregar(): void {
        this.entregado = true;
    }

    devolver(): void {
        this.entregado = false;
    }

    isEntregado(): boolean {
        return this.entregado;
    }

    compareTo(a: Entregable): number {
        if (a instanceof Videojuego) {
            // Comparar por horas estimadas
            return this.horasEstimadas - (a as Videojuego).getHorasEstimadas();
        }
        // Otros casos o tipos de objetos pueden ser manejados según la necesidad
        return 0;
    }
}

export default Videojuego;