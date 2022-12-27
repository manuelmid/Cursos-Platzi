let ano = document.getElementById("ano");
let boton = document.getElementById("boton");
let bdy = document.body;
let gradient = "radial-gradient(circle,rgba(0,0,0,1) 36%, rgb(7, 175, 158) 37%,rgba(5,42,41,1) 38%,rgba(0,0,0,1) 85%)"
let colorOne = 'rgb(7, 175, 158) 37%';
let colorTwo = 'rgb(7, 175, 158) 30%';
let nb = 45;



//MAKE A FUNCTION WHERE ANO ANIMATE THE % OF THE BODY.rgba(0,0,0,1) 46% / (46++ ; 46-- //

//bdy.style.backgroundImage = gradient;
bdy.style.backgroundImage = 'radial-gradient(circle,rgba(0,0,0,1) 36%,'+ colorOne +',rgba(5,42,41,1) 41%,rgba(0,0,0,1) 85%)';

boton.addEventListener("click", anoClick); 

function anoClick() {
    
        bdy.style.backgroundImage = 'radial-gradient(circle,rgba(0,0,0,1) 36%,'+ colorTwo +',rgba(5,42,41,1) 38%,rgba(0,0,0,1) 85%)';
        BotonStyles() ;
        console.log("Buenas");

        if (ano.value > 10) {
                    nb ++;
                    console.log("hii");
                    boton.style.width++;

            
        };

        if (nb > 50){
                console.log("paso0000000000");
                // alert(ano.value - 2022);
                // bdy.firstChild.nextElementSibling.innerText = "hii";
                };
        
    };
    

    function BotonStyles() {
                    boton.style.width = nb + "px";
                    console.log(boton.style.width);
                    
            };


ano.value;
console.log(ano);
console.log("Aqui estoy :D");

ano.addEventListener("click", hablar)

function hablar(){
        console.log("ai");
}