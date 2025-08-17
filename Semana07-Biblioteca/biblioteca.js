class Libro {
  constructor(titulo, autor, anio, disponible){
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.disponible = disponible;
  }
}

class Biblioteca {
    constructor(){
        this.libros = [];
    }
    agregarLibro(libro){
        this.libros.push(libro);
    }
    // Ajuste buscar por año, ya que puede tener más sentido varios libros con el mismo año, que con el mismo titulo.
    buscarPorAnio(anio){
        this.libros.filter(l.anio = anio);
    }
    prestarLibro(titulo){
        if (!this.libros.filter(l.titulo = titulo)){
            console.log(`Libro no encontrado`)
        } else {
            libro.disponible = false;
            console.log(`Se confirma el préstamo del libro ${titulo}.`)
        }
    }
}

class LibroInfantil extends Libro {
  constructor(titulo, autor, anio, disponible, edadMinima){
    super(titulo, autor, anio, disponible);
    this.edadMinima = edadMinima;
  }
}

// Crea una instancia de Biblioteca y añade algunos libros

const miBiblioteca = new Biblioteca();
const libro1 = new Libro ("Titulo1", "Mauricio", 1995, true);
const libro2 = new Libro ("Titulo2", "Andrés", 1995, true);
const libro3 = new Libro ("Titulo3", "Luis", 1992, true);
const libro4 = new Libro ("Titulo4", "Alfonso", 1992, true);
const libro5 = new LibroInfantil ("Titulo5", "Florencia", 2020, true, 5);
const libro6 = new LibroInfantil ("Titulo6", "Francisca", 2024, true, 1);


agregarLibro(libro1);
agregarLibro(libro2);
agregarLibro(libro3);
agregarLibro(libro4);
agregarLibro(libro5);
agregarLibro(libro6);

