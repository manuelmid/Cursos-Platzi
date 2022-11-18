let mainBox = document.getElementById("mainBox");
let imagenes = []
    imagenes["Cauchin"]   = "imgs/cerdo.png";
    imagenes["Vaquichu"] = "imgs/vaca.png";
    imagenes["Pokacho"]  = "imgs/pollo.png";

let colection = [];
    colection.push( new Pakiman("Cauchin", 100, 30) );
    colection.push( new Pakiman("Vaquichu", 120, 40)  );
    colection.push( new Pakiman("Pokacho", 80, 50) );

for( let pakin of colection ){
    pakin.mostrar();
}
    

