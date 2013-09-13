var debug = require('debug')('app'),
	server = require('./lib/server'),
	db = require('./lib/db'),
	handler = require('./lib/handler')(db);

// Setup routes
require('./lib/router')(server, handler);

// All set, start listening!
var port = 3000;
server.listen(port);
debug("Express server listening on port %d in %s mode", port, process.env.NODE_ENV);
