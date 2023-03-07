var frutas = ["manzana", "pera", "mandarina"];

function mercado(){

    for(var fruta of frutas){
        console.log(fruta)
    }

}

mercado()

//Recorriendo Arrays con .find(), .forEach() y .some()

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]

  //.find     //.filter
  
      //Find: Retorna solo la primera coincidencia.
      //Filter: Retorna todas las coincidencias.
      
/*   Utilicemos el array articulos que definimos para encontrar algún artículo que su nombre sea Laptop.
  Entonces utilizamos el método find que retorne la condición que necesitamos. 
  Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array. */

var algunArticulo = articulos.find(function (articulo) {
    return (articulo.nombre = "Laptop")
  })

  //.forEach
/*     El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. 
    Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.

    Este método recibe dos argumentos:

    La función que itera cada elemento del array (obligatorio).
    Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. */

  articulos.forEach(function (articulo) {
    console.log(articulo)
  })

  //.some

/*     El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

    El método some recibe dos argumentos:

    La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
    Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. */

    var existeArticulo = articulos.some(function (articulo) {
        return articulo.costo <= 700
      })
      console.log(existeArticulo) // true

      //Find: Retorna solo la primera coincidencia.
      //Filter: Retorna todas las coincidencias.

      var artiFiltrados = articulos.filter()
      console.log(artiFiltrados)