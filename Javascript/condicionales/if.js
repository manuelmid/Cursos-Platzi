var edad = prompt();
    parseInt(edad);     

if(edad == 18){
    console.log("Puedes votar, es tu primera votacion :D")
} else if (edad > 100){
    console.log("Ya estas muerto viejo")
} else if (edad > 18){
    console.log("Puedes votar")
} else {
    console.log("No puedes votar, eres menor de edad")
}

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No soy uno";