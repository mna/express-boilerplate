# Express boilerplate #

This project started out as a [blog post about how to structure a Web Application using node.js and Express][post] (in French). It is intended as a working example of the suggested structure in the article.

## Installing

Obviously you need node.js and npm. `git clone` the repository (to clone a specific branch, for example *simple-DI*, run `git clone git@github.com:PuerkitoBio/express-boilerplate.git -b simple-DI your-local-folder`), then run `npm install -d` in the root directory to setup the dependencies. Once installed, you can run the super exciting app with `make run` or `npm start` or `node app.js` and browse to `http://localhost:3000/`. When/if I add some sample unit tests, you'll be able to run them using `make test` or `npm test`.

## About the branches

This boilerplate is an ongoing experiment on how to structure node.js and Express-based web applications, it is *NOT* a library nor a be-all, end-all, definitive answer on how to do it. I like the basic directory and file structure, this is definitely a good starting point and a better than average code organization, but there are many ways to tie it all together, and I will gradually add examples on those possible ways. I will use different branches to show different patterns.

*   **simple-DI** : This is the basic, easiest way to do it while maintaining the benefits of decoupling the modules. It uses arguments to inject dependencies into the module (quite like "constructor based" DI), and the *app.js* file is the assembler.
*   **prototype-extension** : This branch makes use of the prototype nature of javascript to "inject a dependency" (though this is not usually seen as a DI pattern, but it does achieve DI's goals) via an extension of the prototype, so that the *config* module gets injected into the *server* module. The config module extends Express' `HTTPServer` with a `applyConfiguration()` function, and the server module simply calls this function. It will only work with Express 2.x (will need some tweaking for Express 3.x). See those modules for actual code, which explains it much better than this text...
*   **implementjs** : Not a new dependency injection method *per se*, but I added the library [implement.js][impl] to validate the interface of injected dependencies.
*   **express3** : an example using Express version 3, thanks to 92bondstreet for the PR.
*   **master** : The master branch is the current development branch, so whatever next pattern I'm working on, it will be in master.

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

## Use of "debug"

I use the tiny [debug][] library instead of logging info to the console just to keep an eye on what's going on and some quick debugging. The nice thing about this library is the ease of use, the conditional output using the DEBUG environment variable, and the colors in the terminal. I like it. Easy to take out if you don't. See for yourself:

![](http://dl.dropbox.com/u/21605004/DebugWithColors.png)

## What's with "db" ?

`/lib/db` could well be named `/lib/models` if you prefer. That's what it's for, the models in your Web app. Since I often use MongoDB, I go with the "db" directory. It's not actually used in this boilerplate example, but the code is there to show how I usually organize it.

[post]: http://hypermegatop.calepin.co/structurer-une-application-web-avec-express-et-nodejs.html
[debug]: https://github.com/visionmedia/debug
[blog]: http://hypermegatop.calepin.co/
[impl]: https://github.com/PuerkitoBio/implement.js
