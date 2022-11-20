let imagen = document.getElementById("imagen");
let dinero = 0;
let papeles = 0;
let div = 0;
let entregado = [];

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

    
    
    imagen.addEventListener("click", retirar);
    
    function retirar(){
        
        let valorUser = document.getElementById("cajeroInput");
        dinero = parseInt(valorUser.value);
        console.log(dinero);    

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

                console.log("weas "+ dinero)
                //console.log( b.valor )

            } 
            
            
        }
    console.log(entregado)

}
