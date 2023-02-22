var elements = ['piedra','papel','tijera'];
var user = document.getElementById('cars');
var pc = document.getElementById('carsPc');
var boton = document.getElementById("boton")

function jugar(){

    var userV = user.value;
    var pcV = pc.value;

    switch(true){

        case userV == pcV:
            console.log("Empate")
            break;
        case pcV == elements[0] && userV == elements[1]:
            console.log("Tu ganas con " + elements[1])
            break;
        case pcV == elements[1] && userV == elements[0]:
            console.log("La computadora gana con " + elements[1])
            break;
        case pcV == elements[2] && userV == elements[0]:
            console.log("Tu ganas con " + elements[0])
            break;
        case pcV == elements[0] && userV == elements[2]:
            console.log("La computadora gana con " + elements[0])
            break;
        case pcV == elements[2] && userV == elements[1]:
            console.log("La computadora gana con " + elements[2])
            break;
            default:
                return "nada de nada"
    
    }

}

jugar()