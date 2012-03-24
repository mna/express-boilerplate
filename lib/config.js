var debug = require('debug')('config'),
	path = require('path'),
	express = require('express');

// Export nothing, only extend express' HTTPServer with an "applyConfiguration" method
// (extend HTTPSServer if https is used). Will NOT work with Express 3.0.
express.HTTPServer.prototype.applyConfiguration = function () {
	var self = this,
		rootDir = path.resolve(__dirname, '..');

	this.configure(function () {
		debug('setting up common configuration...');

		// Configure jade as template engine
		self.set('views', rootDir + '/views');
		self.set('view engine', 'jade');
		self.set("view options", {layout: false});

		// Parse the body
		self.use(express.bodyParser());

		// Use the method override so that PUT and DELETE can be simulated with a POST
		self.use(express.methodOverride());

		// Parse the cookies
		self.use(express.cookieParser());

		// Session support, in normal use, put secret in environment var: 
		// self.use(express.session({ secret: process.env.MY_SESSION_SECRET }));
		self.use(express.session({ secret: 'hypermegatop really!' }));

		// Enable the router
		self.use(self.router);

		// Serve static content from "public" directory
		self.use(express.static(rootDir + '/public'));
	});

	this.configure('dev', function () {
		debug('setting up "dev" configuration...');
		self.use(express.logger('tiny'));
		self.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
	});

	this.configure('production', function () {
		debug('setting up "production" configuration...');
		self.use(express.errorHandler()); 
	});
}
