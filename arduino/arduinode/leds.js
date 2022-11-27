var jf = require("johnny-five");
var circuito = jf.Board;

circuito.on( 'ready', prender );

function prender(){
    
   var led = new jf.Led(13); 
   var ledRojito = new jf.Led(9)
       led.blink(500);
       ledRojito.blink(100);

}

console.log("holaa")