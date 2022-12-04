#include <Servo.h>
//LINK : https://www.tinkercad.com/things/d7ZfeMB9k4p-tremendous-habbi-kup/editel

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
  digitalWrite(led, HIGH);
  
  Serial.println(valorLDR);
  
  if (valorLDR > 500) {
    if (servoAbajo) {
      servo.write(110);
      servoAbajo = false;
    } else {
      servo.write(70);
      servoAbajo = true;
    }
  	
  } else {
  	servo.write(0);
  }
  
  delay(1000);
}