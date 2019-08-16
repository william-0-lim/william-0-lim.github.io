const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.use(express.static(__dirname + 'css'));

const port = 8080;

app.get('/', function (req, res){
	res.sendFile(__dirname + 'index.html');
});

app.get('/projects', function(req, res){
	res.sendFile(__dirname + '/projects.html');
});

app.get('/me', function(req, res){
	res.sendFile(__dirname + '/me.html');
});

app.get('/projects2', function(req, res){
	res.sendFile(__dirname + '/projects2.html');
});

app.get('/hobby', function(req, res){
	res.sendFile(__dirname + '/hobby.html');
});

app.get('/experience', function(req, res){
	res.sendFile(__dirname + '/experience.html');
});

app.get('/a1', function(req, res){
	res.sendFile(__dirname + '/a1.html');
});

app.listen(port, function(){
	console.log("Listening on port " + port);
});
