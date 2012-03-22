.DEFAULT_GOAL = run
REPORTER = spec
TESTS = test/*.js
DEBUG = app,config,db,server,router,handler

test:
	node_modules/.bin/mocha --reporter $(REPORTER) $(TESTS)

run:
	DEBUG=$(DEBUG) node app.js

.PHONY: test run
