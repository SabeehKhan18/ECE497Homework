import Adafruit_BBIO.GPIO as GPIO

inputButton = "P9_28"
output = "P9_27"

GPIO.setup(inputButton,GPIO.IN)
GPIO.setup(output,GPIO.OUT)

while True:
    if GPIO.input(inputButton):
        GPIO.output(output,GPIO.HIGH)
    else:
        GPIO.output(output,GPIO.LOW)
