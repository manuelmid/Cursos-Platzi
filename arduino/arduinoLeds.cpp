Servo servo;
int amarillo = 13;
int motor = 9;
int milisegundos = 100;

void setup(){

  pinMode( amarillo, OUTPUT );

  servo.attach(9);
  servo.write(0);
  
}

void loop(){

  digitalWrite( amarillo, HIGH );
  digitalWrite( motor, LOW );
  delay( milisegundos );
  digitalWrite( amarillo, LOW );
  digitalWrite( motor, HIGH );
  delay( milisegundos * 2 );
  
}
