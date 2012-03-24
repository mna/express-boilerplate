// First extend the express server's prototype
require('./lib/config');

var debug = require('debug')('app'),
	server = require('./lib/server'),
	db = require('./lib/db'),
	handler = require('./lib/handler')(db);

// Setup routes
require('./lib/router')(server, handler);

// All set, start listening!
server.listen(3000);
debug("Express server listening on port %d in %s mode", server.address().port, process.env.NODE_ENV);
