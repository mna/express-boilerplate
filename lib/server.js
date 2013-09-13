var debug = require('debug')('server'),
	express = require('express'),
	impl = require('implementjs'),
	config = require('./config'),
	server;

// Create the HTTP server (Express 3.0 version)
debug('creating Express server...');
server = express();

// Apply the configuration
config.applyConfiguration(server);

// Some initialization or whatever can go here...

// Export the server
module.exports = server;
