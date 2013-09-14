var debug = require('debug')('config'),
	path = require('path'),
	express = require('express');

// Export method to be compliant with Express 3.0
var applyConfiguration = function (server) {
	var app = server,
		rootDir = path.resolve(__dirname, '..');

	app.configure(function () {
		debug('setting up common configuration...');

		// Configure jade as template engine
		app.set('views', rootDir + '/views');
		app.set('view engine', 'jade');
		app.set("view options", {layout: false});

		// Parse the body
		// Warning: http://andrewkelley.me/post/do-not-use-bodyparser-with-express-js.html
		app.use(express.bodyParser());

		// Use the method override so that PUT and DELETE can be simulated with a POST
		app.use(express.methodOverride());

		// Parse the cookies
		app.use(express.cookieParser());

		// Session support, in normal use, put secret in environment var: 
		// app.use(express.session({ secret: process.env.MY_SESSION_SECRET }));
		app.use(express.session({ secret: 'hypermegatop really!' }));

		// Enable the router
		app.use(app.router);

		// Serve static content from "public" directory
		app.use(express.static(rootDir + '/public'));
	});

	app.configure('dev', function () {
		debug('setting up "dev" configuration...');
		app.use(express.logger('tiny'));
		app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
	});

	app.configure('production', function () {
		debug('setting up "production" configuration...');
		app.use(express.errorHandler()); 
	});
}

exports.applyConfiguration = applyConfiguration;
