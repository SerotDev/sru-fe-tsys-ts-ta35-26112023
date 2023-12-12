import Entregable from './IEntregable';

class Serie implements Entregable {
    private titulo: string;
    private numeroTemporadas: number;
    private entregado: boolean;
    private genero: string;
    private creador: string;

    constructor(titulo: string, creador: string) {
        this.titulo = titulo;
        this.numeroTemporadas = 3;
        this.entregado = false;
        this.genero = "Sin especificar";
        this.creador = creador;
    }

    // Métodos getters
    getTitulo(): string {
        return this.titulo;
    }

    getNumeroTemporadas(): number {
        return this.numeroTemporadas;
    }

    getEntregado(): boolean {
        return this.entregado;
    }

    getGenero(): string {
        return this.genero;
    }

    getCreador(): string {
        return this.creador;
    }

    // Métodos setters
    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    setNumeroTemporadas(numeroTemporadas: number): void {
        this.numeroTemporadas = numeroTemporadas;
    }

    setEntregado(entregado: boolean): void {
        this.entregado = entregado;
    }

    setGenero(genero: string): void {
        this.genero = genero;
    }

    setCreador(creador: string): void {
        this.creador = creador;
    }

    // Método toString
    toString(): string {
        return `Título: ${this.titulo}, Temporadas: ${this.numeroTemporadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Creador: ${this.creador}`;
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
        if (a instanceof Serie) {
            // Comparar por número de temporadas
            return this.numeroTemporadas - (a as Serie).getNumeroTemporadas();
        }
        // Otros casos o tipos de objetos pueden ser manejados según la necesidad
        return 0;
    }
}

export default Serie;