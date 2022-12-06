#include <Servo.h>

Servo servo;
int led = 13;
int pinLDR = 0;
int valorLDR = 0;

bool servoAbajo = true;

void setup()
{
  Serial.begin(9600);
  
  pinMode(13, OUTPUT); 
  
  servo.attach(9);
  servo.write(0);
}

void loop()
{
  valorLDR = analogRead(pinLDR);
  
  Serial.println(valorLDR);
  
  if (valorLDR > 175) {
    digitalWrite(led, HIGH);
    if (servoAbajo) {
      servo.write(180);
      servoAbajo = false;
    } else {
      servo.write(80);
      servoAbajo = true;
      digitalWrite(led, LOW);
    }
  	
  } else {
    servoAbajo = true;
  	servo.write(0);
    digitalWrite(led, LOW);
  }
  
  delay(500);
}