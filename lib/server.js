var debug = require('debug')('server'),
	express = require('express');

// Self-invoking function, usually not much to do here
module.exports = (function () {
	debug('creating Express server...');
	return express.createServer();
}());
