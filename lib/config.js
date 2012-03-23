var debug = require('debug')('config'),
	express = require('express');

// One argument (the root directory of the app), and a dependency, an Express HTTP server to configure
module.exports = function (rootDir, server) {
	server.configure(function () {
		debug('setting up common configuration...');

		// Configure jade as template engine
		server.set('views', rootDir + '/views');
		server.set('view engine', 'jade');
		server.set("view options", {layout: false});

		// Parse the body
		server.use(express.bodyParser());

		// Use the method override so that PUT and DELETE can be simulated with a POST
		server.use(express.methodOverride());

		// Parse the cookies
		server.use(express.cookieParser());

		// Session support, in normal use, put secret in environment var: 
		// server.use(express.session({ secret: process.env.MY_SESSION_SECRET }));
		server.use(express.session({ secret: 'hypermegatop really!' }));

		// Enable the router
		server.use(server.router);

		// Serve static content from "public" directory
		server.use(express.static(rootDir + '/public'));
	});

	server.configure('dev', function () {
		debug('setting up "dev" configuration...');
		server.use(express.logger('tiny'));
		server.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
	});

	server.configure('production', function () {
		debug('setting up "production" configuration...');
		server.use(express.errorHandler()); 
	});
};
