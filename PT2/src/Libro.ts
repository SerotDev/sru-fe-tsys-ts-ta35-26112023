class Libro {
    private isbn: string;
    private titulo: string;
    private autor: string;
    private numPaginas: number;

    constructor(isbn: string, titulo: string, autor: string, numPaginas: number) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    // Getters y setters
    getIsbn(): string {
        return this.isbn;
    }

    setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    getTitulo(): string {
        return this.titulo;
    }

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    getNumPaginas(): number {
        return this.numPaginas;
    }

    setNumPaginas(numPaginas: number): void {
        this.numPaginas = numPaginas;
    }

    // Método toString
    toString(): string {
        return `El libro "${this.titulo}" con ISBN ${this.isbn} creado por ${this.autor} tiene ${this.numPaginas} páginas.`;
    }
}

export default Libro;