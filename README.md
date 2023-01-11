# bsgn
 Dockerized script quering the https://macaddress.io/ MAC address lookup API. 
This repository was created for the purpose of getting company name via https://macaddress.io/ web page by providing device MAC address and API_KEY to the script.

Script call:
- <node initial.js —arguments>

—arguments
- “—help” - will show a description of calling arguments.
- “—Mac XX:XX:XX:XX:XX:XX” - normal usage where the MAC address is supplied in command-line
			- ahead of time at least the API_KEY environment variable needs to be declared and populated 
- no arguments will expect a second environment variable to be declared and populated : MAC=<mac_address>. The absence of this variable 
			when no arguments are provided will generate an error.

Improvements to be added:
- another module that would modify the API_KEY and MAC environment variables in the docker file and env.env environment file
- another argument that will remove the explanatory string from the vendor response 
- resolve the other types of searches(not required in the Assignment):
		'json' — Full MAC address information in JSON format.
		'xml' — Full MAC address information in XML format.
		'csv' — Full MAC address information in CSV format.
- resolve addition of mandatory access control rules using SELinux for the Linux distribution used;


The code was tested under VirtualBox with Debian distribution ran on an iMac 19,1 2019
