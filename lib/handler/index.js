var debug = require('debug')('handler');

// Self-invoking function, would usually expect "db" as an injected dependency, though not
// for this simple example.
module.exports = (function () {
	debug('setup handlers...');

	return {
		renderIndex: function (req, res) {
			res.render('index', {title: "Express Boilerplate"});
		}
	};
}());
