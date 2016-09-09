#!/usr/bin/env node

// Setup
var b = require('bonescript');
var buttons = ["P9_11","P9_13","P9_15","P9_17"];

// Pin 11 moves left
// Pin 13 moves up
// Pin 15 moves down
// Pin 17 moves right

var setup = false;

// Set board
var MaxX = 8, MaxY = 8;
var x = (MaxX / 2) - 1, y = (MaxY / 2) - 1;
var board = new Array(MaxY);
for (i = 0; i < board.length; i++)  {
	board[i] = new Array(MaxX);
	for (var j = 0; j < board[i].length; j++) {
		board[i][j] = '.';
	}
}

// Set pins and interrupts
for (var i = 0; i < buttons.length; i++) {
	b.pinMode(buttons[i],b.INPUT,7,'pulldown');
	
}
// For some reason, I have to code each button differently
// To be clear, all buttons are wired the same
b.attachInterrupt(buttons[0],true,b.RISING,mark);
b.attachInterrupt(buttons[1],true,b.FALLING,mark);
b.attachInterrupt(buttons[2],true,b.FALLING,mark);
b.attachInterrupt(buttons[3],true,b.FALLING,mark);

// waits for setup to be complete
setTimeout(setupComplete,1000);
function setupComplete(){
	setup = true;
	board[y][x] = 'X';
	printBoard();
}

// prints the array
function printBoard() {
	console.log("Marker is at " + x + ", "+ y);
	for ( i = 0; i < board.length; i++ ) {
		for (j = 0; j < board[i].length; j++) {
			process.stdout.write(board[i][j]);
		}
		process.stdout.write("\n");
	}
};

function mark(i) {
	if(setup){
	if (i.pin.key == "P9_11") {
		x = x - 1;
		if (x == -1)
			x = MaxX - 1;
	}
	else if (i.pin.key == "P9_13") {
		y = y - 1;
		if (y == -1)
			y = MaxY - 1;
	}
	// Some problem with pulldown resistor here,
	// needed to flip x.value
	else if (i.pin.key == "P9_15") {
		y = y + 1;
		if (y == MaxY - 1)
			y = 0;
	}
	else if (i.pin.key == "P9_17") {
		x = x + 1;
		if (x == MaxX - 1)
			x = 0;
	}
	board[y][x] = 'X';
	printBoard();
	}
};