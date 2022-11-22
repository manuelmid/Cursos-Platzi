let express = require("express");
let app = express();

app.get( '/' , inicio);

function inicio(peticion , resultado){
    resultado.setEncoding('Hello world!!');
} 

app.listen(8989);