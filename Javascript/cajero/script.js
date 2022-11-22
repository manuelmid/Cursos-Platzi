let imagen  = document.getElementById("imagen");
let mostrar = document.getElementById("mostrar");

class Billete {

    constructor( v , c ){
        this.valor = v;
        this.cantidad = c;
    }

}

let caja = [];
    caja.push(new Billete( 50 , 3 ));
    caja.push(new Billete( 20 , 2 ));
    caja.push(new Billete( 10 , 2 ));
        
    function retirar(){
        
        let valorUser = document.getElementById("cajeroInput");
            dinero = parseInt(valorUser.value); 

        for( let b of caja ){

            if( dinero > 0 ){

                let papeles;
                let div =  Math.floor( dinero / b.valor );

                if( div > b.cantidad ){
                    papeles = b.cantidad;
                }else{
                    papeles = div;
                }

                entregado.push(new Billete( b.valor , papeles ));
                dinero = dinero - ( b.valor * papeles );

                //console.log( b.valor )

            } 
            
        }

        if( dinero > 0 ){
            mostrar.innerHTML = "No llego pa tanto compa";
        }
        else{
            
            for( let e of entregado ){

                if( e.cantidad > 0 ){
                    
                    // Mostrar en imgs
                    mostrar.innerHTML += e.cantidad + " billetes de $" + e.valor + "</br>";

                }
                
            }
                
        }
    }

let dinero  = 0;
let papeles = 0;
let div     = 0;
let entregado = [];
    
imagen.addEventListener("click", retirar);

