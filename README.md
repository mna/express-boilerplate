# Express boilerplate #

This project started out as a [blog post about how to structure a Web Application using node.js and Express][post] (in French). It is intended as a working example of the suggested structure in the article.

## Installing

Obviously you need node.js and npm. `git clone` the repository, then run `npm install -d` in the root directory to setup the dependencies. Once installed, you can run the super exciting app with `make` or `npm start` and browse to `http://localhost:3000/`. When I add some sample unit tests, you'll be able to run them using `make test` or `npm test`.

## Changelog

This **v0.2.x** uses prototype extension instead of a function with arguments to decouple the config and the server modules. The config module extends Express' `HTTPServer` with a `applyConfiguration()` function, and the server module simply calls this function. It is a nice alternative to passing the server to the config module, although it only works with Express 2.x (will need some tweaking for Express 3.x).

## Structure

    express-boilerplate
    	lib [community convention for server-side code]
    		db [or "models" if preferred, manages connection to DB and exposes models]
    		handler [application logic, actual implementation of the routes]
    		router [routes definition]
    		config [server configuration, could be a directory with multiple files in a more complex project]
    		server [creates and initializes the HTTP server]
    	public [unrestricted area]
    		css [stylesheets, could be plain CSS or preprocessor source files]
    		img [images and icons for the web app]
    		js [client-side javascript files]
    	test [community convention for automated unit test files]
    	views [templates for rendering of HTML pages, could be any Express-supported engine, Jade in this example]
    	Makefile [use "make" to run, "make test" to test, options available, see source]
    	app.js [dumb - no app logic - master file to assemble dependencies and start the app]

## Dependency injection

This initial version uses a very basic dependency injection pattern (arguments to the function exposed with `module.exports` in the target module). Other ways will be discussed in a future article on [my blog][blog].

## Use of "debug"

I use the tiny [debug][] library instead of logging info to the console just to keep an eye on what's going on and some quick debugging. The nice thing about this library is the ease of use, the conditional output using the DEBUG environment variable, and the colors in the terminal. I like it. Easy to take out if you don't. See for yourself:

![](http://dl.dropbox.com/u/21605004/DebugWithColors.png)

## What's with "db" ?

`/lib/db` could well be named `/lib/models` if you prefer. That's what it's for, the models in your Web app. Since I often use MongoDB, I go with the "db" directory. It's not actually used in this boilerplate example, but the code is there to show how I usually organize it.

[post]: http://hypermegatop.calepin.co/structurer-une-application-web-avec-express-et-nodejs.html
[debug]: https://github.com/visionmedia/debug
[blog]: http://hypermegatop.calepin.co/
