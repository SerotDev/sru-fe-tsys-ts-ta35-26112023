"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    // Getters y setters
    getIsbn() {
        return this.isbn;
    }
    setIsbn(isbn) {
        this.isbn = isbn;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getNumPaginas() {
        return this.numPaginas;
    }
    setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }
    // Método toString
    toString() {
        return `El libro "${this.titulo}" con ISBN ${this.isbn} creado por ${this.autor} tiene ${this.numPaginas} páginas.`;
    }
}
exports.default = Libro;
