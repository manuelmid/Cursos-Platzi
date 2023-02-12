var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera"

var contra = tijera;

document.body.innerHTML = contra;

function jugar(e){

    if(e == piedra){
        if( contra == piedra){
            console.log("Empate")
        } else if( contra == papel ){
            console.log("Pierdes! Papel le gana a Piedra")
        } else if ( contra == tijera ){
            console.log("Ganas! Piedra le gana a Tijera")
        } else {
            console.log("No ha elegido")
        }
    }

    if(e == papel){
        if( contra == piedra){
            console.log("Ganas! Papel le gana a Piedra")
        } else if( contra == papel ){
            console.log("Empate")
        } else if ( contra == tijera ){
            console.log("Pierdes! Tijera corta Papel")
        } else {
            console.log("No ha elegido")
        }
    }

    if(e == tijera){
        if( contra == piedra){
            console.log("Pierdes! Piedra le gana a Tijera")
        } else if( contra == papel ){
            console.log("Ganas! Tijera corta Papel")
        } else if ( contra == tijera ){
            console.log("Empate")
        } else {
            console.log("No ha elegido")
        }
    }

}

