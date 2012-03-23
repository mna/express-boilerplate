var debug = require('debug')('db'),
	mongoose = require('mongoose'),
	model = require('./model'),
	connString = 'mongodb://' + process.env.MY_USER + ':' + 
				 process.env.MY_PWD + '@somehost.com:9999/DbName';

// This is not actually used in the boilerplate, but is an example of a MongoDB / mongoose setup
// debug('connecting to database...');
// mongoose.connect(connString);

// Should you need to do something on open or close...
/*
mongoose.connection.on('open', function () {
	debug('Mongo connected.');
});

mongoose.connection.on('close', function () {
	debug('Mongo closed.');
});
*/

module.exports.MyModel = model;
