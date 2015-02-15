var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var app = express();
var db = mongojs('kamilist', ['kamilist']);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/kamilist', function (req, res){
	console.log("GET request detected");

	db.kamilist.find(function (err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/kamilist', function (req, res){
	console.log(req.body);
	db.kamilist.insert(req.body, function (err, doc){
		res.json(doc);
	});
});

app.delete('/kamilist/:id', function (req, res){
	var id = req.params.id;
	console.log(id);
	db.kamilist.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
		res.json(doc);
	});
});

app.get('/kamilist/:id', function (req, res){
	var id = req.params.id;
	console.log(id);
	db.kamilist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
		res.json(doc);
	});
});

app.put('/kamilist/:id', function (req, res){
	var id = req.params.id;
	console.log(req.body.kami_name);
	db.kamilist.findAndModify({
		query: {_id: mongojs.ObjectId(id)},
		update: {
			$set: 
			{
				event_name: req.body.kami_name, 
				hours: req.body.hours
			}
		},
			new: true
		},
		function (err, doc){
			res.json(doc);
	});
});

app.listen(3000, function (){
	console.log("Express server listening on port 3000...")
});