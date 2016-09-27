#!/bin/bash

#Point registers to thermostat
i2cset -y 2 0x49 0x00 
i2cset -y 2 0x4a 0x00 

temp1=$(i2cget -y 2 0x49)
temp2=$(i2cget -y 2 0x4a)

temp1high=$((temp1 + 2))
temp2high=$((temp2 + 2))

temp1low=$((temp1 + 1))
temp2low=$((temp1 + 1))

echo 'Initial temps'
echo 'Sensor 1:'
echo $temp1
echo 'Sensor 2:'
echo $temp2

#Setting high and low temps for both pieces
i2cset -y 2 0x49 0x02 $temp1low #Setting Low on first
i2cset -y 2 0x49 0x03 $temp1high #Setting High on first

i2cset -y 2 0x4a 0x02 $temp2low #Setting Low on second
i2cset -y 2 0x4a 0x03 $temp2high #Setting High on second

#Pointing registers back to thermostat
i2cset -y 2 0x49 0x00 
i2cset -y 2 0x4a 0x00 

echo 'Executing a script'
./tmp_alert.js

echo 'Sensor 1'
i2cget -y 2 0x49
echo 'Sensor 2'
i2cget -y 2 0x4a
