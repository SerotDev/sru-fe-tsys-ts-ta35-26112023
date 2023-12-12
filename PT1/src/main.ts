import Serie from "./Serie";
import Videojuego from "./Videojuego";

// Crear arrays de Series y Videojuegos
const series: Serie[] = [
  new Serie("Serie 1", "Creador 1"),
  new Serie("Serie 2", "Creador 2"),
  new Serie("Serie 3", "Creador 3"),
  new Serie("Serie 4", "Creador 4"),
  new Serie("Serie 5", "Creador 5"),
];

const videojuegos: Videojuego[] = [
  new Videojuego("Videojuego 1", 20, "Aventura", "CompañíaXYZ"),
  new Videojuego("Videojuego 2", 30, "Acción", "CompañíaABC"),
  new Videojuego("Videojuego 3", 15, "Estrategia", "Compañía123"),
  new Videojuego("Videojuego 4", 25, "Deportes", "Compañía456"),
  new Videojuego("Videojuego 5", 40, "RPG", "Compañía789"),
];

// Entregar algunos Videojuegos y Series
series[0].entregar();
series[1].entregar();
series[4].entregar();
videojuegos[2].entregar();
videojuegos[3].entregar();
videojuegos[4].entregar();

// Contar y devolver Series y Videojuegos entregados
function contarEntregados(arr: any[]): any[] {
  const entregados = arr.filter((item) => item.isEntregado());
  entregados.forEach((item) => item.devolver());
  return entregados;
}

const seriesEntregadas = contarEntregados(series);
const videojuegosEntregados = contarEntregados(videojuegos);

// Encontrar Videojuego con más horas estimadas
const videojuegoMasHoras = videojuegos.reduce((prev, current) =>
  prev.getHorasEstimadas() > current.getHorasEstimadas() ? prev : current
);

// Encontrar Serie con más temporadas
const serieMasTemporadas = series.reduce((prev, current) =>
  prev.getNumeroTemporadas() > current.getNumeroTemporadas() ? prev : current
);

// Mostrar información en pantalla
console.log("Series Entregadas:", seriesEntregadas.map((serie) => serie.toString()));
console.log("Videojuegos Entregados:", videojuegosEntregados.map((videojuego) => videojuego.toString()));
console.log("Videojuego con más horas estimadas:", videojuegoMasHoras.toString());
console.log("Serie con más temporadas:", serieMasTemporadas.toString());