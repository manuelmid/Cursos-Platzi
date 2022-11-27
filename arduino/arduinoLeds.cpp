int amarillo = 13;
int rojo = 11;
int miliSegundos = 500;
int esperar = 1000;

void setup(){

    pinmode( amarillo, OUTPUT );
    pinmode( rojo, OUTPUT );

}

void loop(){

    digitalWrite( amarillo, HIGH );
    digitalWrite( rojo, LOW )     ;
    delay( milisegundos )         ;
    digitalWrite( amarillo, LOW ) ;
    digitalWrite( rojo, HIGH )    ;
    delay( milisegundos * 2 )     ;

}