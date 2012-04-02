var debug = require('debug')('server'),
	express = require('express'),
	impl = require('implementjs'),
	server;

// Create the HTTP server
debug('creating Express server...');
server = express.createServer();

// Validate server's interface
impl.implements(server, {applyConfiguration: impl.F});

// Apply the configuration
server.applyConfiguration();

// Some initialization or whatever can go here...

// Export the server
module.exports = server;
