#!/usr/bin/env node

var b = require('bonescript');
var pins = ["P9_21","P9_22"];
var block = false;

for (var i=0; i < pins.length; i++) 
{
	b.pinMode(pins[i], b.INPUT);
	b.attachInterrupt(pins[i],true,b.CHANGE,callback);
}

block = true;
function callback(x) 
{
	if (block) 
	{	
		console.log("Interrupt detect on pin: " + x.pin.key);
		process.exit(0);
	}
}
