let teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};

document.addEventListener("keydown", moverCerdo);

let canva = document.getElementById("canva");
let papel = canva.getContext("2d");
let cantidad = aleatorio(1,25);

//CERDO
let posicionCerdo = 5;
let x = 200;
let y = 200;



let fondo = {
    url: "tile.png",
    cargaOK: false
}
let vaca = {
    url: "vaca.png",
    cargaOK: false
};
let cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function cargarFondo(){ 
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas(){ 
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos(){ 
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar(){
    
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK){
        for(let i = 0 ; i < cantidad ; i++){
            let x = aleatorio(0,6);
            let y = aleatorio(0,6);
            let x1 = x * 80;
            let y2 = y * 80;

            papel.drawImage(vaca.imagen, x1, y2);
        }
    }
    if(cerdo.cargaOK){
        papel.drawImage(cerdo.imagen, x, y);
    }


}

if(cantidad > 1){
    console.log("Hay: "+ cantidad + " Vacas");
}else{
    console.log("Hay: "+ cantidad + " Vaca");
}



function aleatorio(min, maxi){
    let resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    //console.log(resultado)
    return resultado;
}

//MOVIMIENTO DEL CERDO






function moverCerdo(evento){



    console.log(x);

    if(evento.keyCode == teclas.UP){
        y = y - posicionCerdo;
        papel.drawImage(cerdo.imagen, x, y);
        console.log("arriba");
    }
    if(evento.keyCode == teclas.DOWN){
        y = y + posicionCerdo;
        papel.drawImage(cerdo.imagen, x, y);

        console.log("abajo");
    }
    if(evento.keyCode == teclas.RIGHT){
        x = x + posicionCerdo;
        papel.drawImage(cerdo.imagen, x, y);

        console.log("derecha");
    }
    if(evento.keyCode == teclas.LEFT){
        x = x - posicionCerdo;
        papel.drawImage(cerdo.imagen, x, y);

        console.log("izquierda");
    }
    canva.width=canva.width;
    papel.drawImage(cerdo.imagen, x, y);
}

/*switch(evento.keyCode){

    case teclas.DOWN:
        moverCerdo();
        
    break;

    case teclas.UP:
        moverCerdo();
        
    break;

    case teclas.LEFT:
        moverCerdo();
        
    break;

    case teclas.RIGHT:
        moverCerdo();
        
    break;

}*/