class Libro {
  constructor(titulo, autor, anio, disponible = true){
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
        this.libros
        .push(libro);
    }
    // Ajuste buscar por año, ya que puede tener más sentido varios libros con el mismo año, que con el mismo titulo.
    buscarPorAnio(anio){
        const librosFiltrados = this.libros.filter(l => l.anio === anio);
        return librosFiltrados;
    }
    prestarLibro(titulo){
      const libro = this.libros.find(
        l => l.titulo.toLowerCase() === titulo.toLowerCase()
      );  
      
      if (!libro){
            console.log(`Libro no encontrado`)
        } else if (!libro.disponible){
          console.log(`El libro ${titulo} no está disponible.`)
        } else{
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


miBiblioteca.agregarLibro(libro1);
miBiblioteca.agregarLibro(libro2);
miBiblioteca.agregarLibro(libro3);
miBiblioteca.agregarLibro(libro4);
miBiblioteca.agregarLibro(libro5);
miBiblioteca.agregarLibro(libro6);

console.log(miBiblioteca);
console.log(miBiblioteca.buscarPorAnio(1992));
miBiblioteca.prestarLibro("Titulo1");
console.log(miBiblioteca);
miBiblioteca.prestarLibro("Titulo1");
