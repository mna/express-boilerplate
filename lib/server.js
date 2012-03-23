var debug = require('debug')('server'),
	express = require('express'),
	server;

// Create the HTTP server
debug('creating Express server...');
server = express.createServer();

// Some initialization or whatever can go here...

// Export the server
module.exports = server;
