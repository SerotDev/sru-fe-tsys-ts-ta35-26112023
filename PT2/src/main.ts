import Libro from "./Libro";

// Crear objetos Libro
const libro1 = new Libro("123456789", "Libro 1", "Autor 1", 200);
const libro2 = new Libro("987654321", "Libro 2", "Autor 2", 300);

// Mostrar información por pantalla
console.log(libro1.toString());
console.log(libro2.toString());

// Indicar cuál de los 2 libros tiene más páginas
const libroConMasPaginas = libro1.getNumPaginas() > libro2.getNumPaginas() ? libro1 : libro2;
console.log(`El libro con más páginas es: ${libroConMasPaginas.getTitulo()}`);