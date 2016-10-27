#!/bin/bash
# Set up gpio 7 to read and gpio 3 to write
cd /sys/class/gpio
echo 27 > export
echo 28 > export
echo out  > gpio27/direction
echo in > gpio28/direction
