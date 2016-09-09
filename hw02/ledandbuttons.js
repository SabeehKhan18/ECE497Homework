#!/usr/bin/env node

var b = require('bonescript');
var leds = ["P9_21","P9_23","P9_22","P9_24"];
var buttons = ["P9_11","P9_13","P9_15","P9_17"];

for (var i = 0; i < buttons.length; i++) {
	b.pinMode(buttons[i],b.INPUT,7,'pulldown');
	b.pinMode(leds[i],b.OUTPUT);
	b.attachInterrupt(buttons[i],true,b.CHANGE,changeLED);
};
	
function changeLED(x) {
	if (x.pin.key == buttons[0]) {
		if (x.value == 1) 
			b.digitalWrite(leds[0],1);
		else
			b.digitalWrite(leds[0],0);
	}
	else if (x.pin.key == buttons[1]) {
		if (x.value == 1) 
			b.digitalWrite(leds[1],1);
		else
			b.digitalWrite(leds[1],0);
	}
	// Some problem with pulldown resistor here,
	// needed to flip x.value
	else if (x.pin.key == buttons[2]) {
		if (x.value == 1) 
			b.digitalWrite(leds[2],1);
		else
			b.digitalWrite(leds[2],0);
	}
	else if (x.pin.key == buttons[3]) {
		if (x.value == 1) 
			b.digitalWrite(leds[3],1);
		else
			b.digitalWrite(leds[3],0);
	}			
};
