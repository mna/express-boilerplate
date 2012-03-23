var debug = require('debug')('router');

// Two dependencies, an Express HTTP server and a handler
module.exports = function (server, handler) {
	debug('setup routes...');
	server.get('/', handler.renderIndex);
};
