let dinero = 110;
let valorTotal;
let papeles;
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
            dinero = dinero - ( b.valor * papeles )
            console.log(dinero)
            console.log(caja[0])
        }
        
    }