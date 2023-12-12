import Estudiante from "./Estudiante";
import Aula from "./Aula";

// Crear un aula y agregar estudiantes
const aula = new Aula(1, 30, "Programación");

for (let i = 1; i <= 25; i++) {
    const sexo = i % 2 === 0 ? "Masculino" : "Femenino";
    const calificacion = Math.floor(Math.random() * 11); // Calificación aleatoria entre 0 y 10
    const estudiante = new Estudiante(`Estudiante${i}`, 20 + i, sexo, calificacion);
    aula.agregarEstudiante(estudiante);
}

// Verificar si el aula puede dar clase
if (aula.puedeDarClase()) {
    console.log("El aula puede dar clase.");
    console.log(aula.obtenerInformacionProfesor());
    aula.mostrarAprobados();
  } else {
    console.log("El aula no puede dar clase.");
  }