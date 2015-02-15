//import db model (required for mongoose.js to work)
var Kami = require('../models/kami-user');

module.exports.list = function(){
	Kami.find({}, function (err, tissues) {
		//receive as JSON
    	res.json(tissues););
};