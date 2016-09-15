#!/bin/bash

# Config and read file for tmp101s. Collaborated with Hazenhamather

#Setting up alerts (thermostat mode)[Polarity and thermostat high]
i2cset -y 2 0x49 0x01 0x06
i2cset -y 2 0x4a 0x01 0x06

#Setting high and low temps for both pieces
i2cset -y 2 0x49 0x02 0x20 #Setting Low on first
i2cset -y 2 0x49 0x03 0x18 #Setting High on first

i2cset -y 2 0x4a 0x02 0x20 #Setting Low on second
i2cset -y 2 0x4a 0x03 0x18 #Setting High on second

#Pointing registers back to thermostat
i2cset -y 2 0x49 0x00 #Set the pointer register back to temperature register
i2cset -y 2 0x4a 0x00 #Set the pointer register back to temperature register

temp1=$(i2cget -y 2 0x49)
temp2=$(i2cget -y 2 0x4a)

temp1=$((temp1*9/5 + 32))
temp2=$((temp2*9/5 + 32))

echo $temp1
echo $temp2
