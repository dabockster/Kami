'use strict';

//import statements
var express				= require('express'), //Express.js webserver
	app_root			= __dirname, //placeholder for folder path
	fs					= require('fs'), //Node.js filesystem library
	morgan				= require('morgan'),	//HTTP request console logger
	errorhandler		= require('errorHandler'), //error logger
	mongoose			= require('mongoose'), //MongoDB DBMS driver
	bodyParser			= require('body-parser'); //easy reading of JSON encoding

//custom controllers (stuff that we created)
var kamiController = require('./server/controllers/kami-controller.js');

//initialize Express server
var app = express();

//JSON dependency
app.use(bodyParser.json());

//log EVERY HTTP request to the console
app.use(morgan('dev'));

//log ALL build/runtime errors
app.use(errorhandler( { dumpExceptions: true, showStack: true } ) );

//HTTP request to index.html
app.get('/', function(req, res){
	//send index.html on GET request
	res.sendFile(app_root + '/client/index.html');
});

//redirect HTTP requests to correct directories
app.use('/js', express.static(app_root + '/client/js'));
app.use('/css', express.static(app_root + '/client/css'));

//listener - param is port number
app.listen(3000, function(){
	console.log('Express.js server now listening on port 3000...');
});