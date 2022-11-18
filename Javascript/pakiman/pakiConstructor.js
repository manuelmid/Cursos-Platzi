class Pakiman{

    constructor( n, v, a ){

        this.imagen = new Image();
        this.nombre = n;
        this.vida =   v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre];

    }
      
    hablar(){
        alert(this.nombre)
    }

    mostrar(){
        mainBox.appendChild(this.imagen)
    }

}
