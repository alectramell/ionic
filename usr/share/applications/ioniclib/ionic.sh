#!/bin/bash

clear

XUSER=$(whoami)

clear

XURL="http://localhost:8888"

clear

checkPHP=$(which php)
checkGCHROME=$(which google-chrome)
checkFIREFOX=$(which firefox)
checkBROWSER=$(which browser)

clear

if [ $checkPHP != "/usr/bin/php" ]
then
	sudo apt-get -y install php
else
	echo "REQS=VOID"
fi

clear

if [ $checkGCHROME = "/usr/bin/google-chrome" ]
then
	webBrowser="google-chrome"
	cd /usr/share/applications/ioniclib/ && php -S "localhost:8888" & google-chrome --app="$XURL"

elif [ $checkFIREFOX = "/usr/bin/firefox" ]
then
	webBrowser="browser"
	cd /usr/share/applications/ioniclib/ && php -S localhost:8888 & browser --new-window="$XURL"

elif [ $checkBROWSER = "/usr/bin/firefox" ]
then
	webBrowser="firefox"
	cd /usr/share/applications/ioniclib/ && php -S localhost:8888 & firefox --new-window="$XURL"
else
	webBrowser="sensible-browser"
	cd /usr/share/applications/ioniclib/ && php -S localhost:8888 & sensible-browser "$XURL"
fi

clear

sudo killall $webBrowser
sudo killall php

clear
