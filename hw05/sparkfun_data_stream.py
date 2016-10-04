import urllib2
import time
import os

def main():
   # First grab the keys from a file
   f = open("data_streamkey.txt")
   lines = f.readlines()
   public = lines[1]
   public = public[:len(public)-1]
   private = lines[3]
   private = private[:len(private)-1]
  
   # Grab the temperature data from both sensors
   temp1 = str(int(os.popen('i2cget -y 2 0x48').read(),16))
   temp2 = str(int(os.popen('i2cget -y 2 0x49').read(),16))
   
   # Send the data to data.sparkfun.com
   url1 = "http://data.sparkfun.com/input/" + public + "?private_key=" + private + "&temperature="+temp1
   input1 = urllib2.urlopen(url1)
   print(input1.getcode())

   url2 = "http://data.sparkfun.com/input/" + public + "?private_key=" + private + "&temperature="+temp2
   input2 = urllib2.urlopen(url2)
   print(input2.getcode())


if __name__ == "__main__":
    main()
