var HOST = '127.0.0.1',
    PORT = 49100;

var dgram = require('dgram');
var client = dgram.createSocket('udp4');
