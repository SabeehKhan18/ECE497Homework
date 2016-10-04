One part of the assignment is to edit a web interface to control the red and orange leds on the adafruit 8x8 i2c led matrix. All i did was edit ledmatrix.js in the realtime folder. I have plans to customize the ledmatrix.html and ledmatrix.css. To start the service, execute boneServer.js first. 

The boneServer.js file starts a node server as well as bonescript and socket.io. The socket.io is used to transfer information between html files, and the boneServer will use this data to send commands to the bone's gpio. This is how the bone lights up an led on the matrix. Originally, the entry to color the LED was ".on". I use two arrays to control the LEDs and toggle them individually, then write this data to the bone. This is a slow but effective option. I didn't change boneServer.


The second part of the assignment is to create a memory map and use that to control a button and led on the beaglebone black. The inputs are on P8_13, P9_16. Outputs are on P9_23, P9_41. 

==========
Prof. Yoder's comments
It would help if your ReadMe would give the file names for the mmap code.
I don't see the Memory Map like figure 2-5.
Otherwise it looks good.  Makefile is a nice touch.

Grade:  9/10