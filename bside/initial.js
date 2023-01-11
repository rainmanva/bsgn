
require('dotenv').config();                 //to read environment variables
var https = require('follow-redirects').https;
var _val = '';
var _index = '';
var vMAC = '';
// build a list of arguments. Simple aproach where is is always expected to have one argument
//ToDo: verify for non-conflicting multiple arguments
process.argv.slice(2).forEach(function (val, index, array) {
  var a = val.split('=');
  if (a[0] == "--mac") 
    vMAC = a[1];
});
//if the call is made withhout arguments it is expected to get the mac address from ENV variables (MAC)
if (vMAC == '') vMAC = process.env.MAC;

var apiKey = process.env.API_KEY

var options = {
  'method': 'GET',
  'hostname': 'api.macaddress.io',
  'path': '/v1?output=vendor&search=' + vMAC + '&apiKey=' + apiKey,
  'headers': {
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    process.argv.forEach(function (val, index, array){
      _val = val;
      _index = index;
    })
    if ((_val == "help") && (_index ==2)) console.log("Help:\n \t- use <--mac=xx:xx:xx:xx:xx:xx> as argument to retrieve the vendor\n\t"+
                                                      "- use --help as an argument to see this\n\t- do not use more than one argument\n\t"+
                                                      "- no argument gets the MAC from the environment variable\n");
    //ToDo: here I should check if the mac id string is malformed
    else if (_val="mac" && (_index ==2)) console.log('Vendor for MAC ' + vMAC + ' is: \t' + body.toString() + '\n');
    else if (_index == 1) console.log('Vendor for MAC ' + vMAC + ' is: \t' + body.toString() + '\n');

  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();