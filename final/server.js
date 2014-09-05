// server.js

	// set up ========================
	var express	= require('express'),
    	app 	= express(),
    	livereload = require('express-livereload');

    	
	// configuration =================
	app.use('/fonts', express.static(__dirname, '/fonts'));
	app.use('/images', express.static(__dirname, '/images'));
	app.use('/styles', express.static(__dirname, '/styles'));
	app.use('/vendors', express.static(__dirname, '/vendors'));

	app.all('/*', express.static(__dirname + '/'));

	// This route deals enables HTML5Mode by forwarding missing files to the index.html
	app.all('/*', function(req, res) {
		res.sendfile('index.html');
	});

	// listen (start app with node server.js) ======================================
	app.listen(4242);
	livereload(app, config={})
	console.log("App listening on port 4242");
