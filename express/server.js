let express = require("express");
let app = express();

app.get( '/' , inicio);

function inicio(peticion , resultado){
    resultado.send("<strong>Home olala</strong>");
};

app.listen(8080);