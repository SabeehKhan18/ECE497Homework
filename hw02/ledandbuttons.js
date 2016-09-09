
var b = require('bonescript');
var leds = ["P9_21","P9_23","P9_22","P9_24"];
var buttons = ["P9_11","P9_13","P9_15","P9_17"];

for (var i = 0; i < buttons.length; i++) {
	b.pinMode(buttons[i],b.INPUT,7,'pullup');
	b.pinMode(leds[i],b.OUTPUT);
	b.attachInterrupt(buttons[i],true,b.CHANGE,changeLED);
};


	
function changeLED(x) {
	if (x.pin.key == "P9_11") {
		if (x.value == 0) 
			b.digitalWrite(leds[0],1);
		else
			b.digitalWrite(leds[0],0);
	}
	else if (x.pin.key == "P9_13") {
		if (x.value == 0) 
			b.digitalWrite(leds[1],1);
		else
			b.digitalWrite(leds[1],0);
	}
	else if (x.pin.key == "P9_15") {
		if (x.value == 0) 
			b.digitalWrite(leds[2],1);
		else
			b.digitalWrite(leds[2],0);
	}
	else if (x.pin.key == "P9_17") {
		if (x.value == 0) 
			b.digitalWrite(leds[3],1);
		else
			b.digitalWrite(leds[3],0);
	}
			
};
