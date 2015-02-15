//mongoose mongodb driver import
var mongoose 	= require('mongoose'),
	Schema 		= mongoose.Schema;

//initialize db schema
var schema = new Schema({
	_id: int,
	username: String
});

//return reference to db
module.exports = mongoose.model('Tissue', schema);