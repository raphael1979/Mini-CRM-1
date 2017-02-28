var express = require("express");
var app = express();
// @DOC : https://nodejs.org/docs/latest/api/path.html
var path = require('path');
// @DOC : https://nodejs.org/api/fs.html
var fs = require('fs');
// @DOC : https://github.com/expressjs/body-parser
var bodyParser = require('body-parser');

// Returns middleware that only parses urlencoded bodies.
app.use(bodyParser.urlencoded({extended : true}))
// Returns middleware that only parses json.
app.use(bodyParser.json());

// Define static file in public folder
app.use(express.static('public'));

// route pour index.html
app.get('/', function(request, response){
	response.sendFile(path.join(__dirname + '/public/index.html'));
});

// route pour le fichier json des animaux
app.get('/animaux', function(req, res){
	res.sendFile(path.join(__dirname + '/data/data.json'));
});

// // route pour la page qui affiche les animaux
// app.get('/show/animaux', function(req, res){
// 	res.sendFile(path.join(__dirname + '/public/pages/animaux.html'));
// });

// // route pour poster les nouveaux animaux
// app.post('/post/animal', function(req, res){
// 	// chemin du fichier json
// 	var file = path.join(__dirname + '/data/data.json')
// 	// Lecture du fichier json
// 	fs.readFile(file, 'utf8', function(err, data){
// 		// si il y à un erreure affiche la !
// 		if(err){
// 			console.log(err);
// 		}
// 		// variable qui contient la data qui est tranformer en json
// 		var doc = JSON.parse(data);
// 		// on push dans le tableaux animaux la requête qu'on reçoit dans le formulaire
// 		doc.animaux.push(req.body);
// 		// on transforme la variable doc en string
// 		var stringDoc = JSON.stringify(doc, null, 2);
// 		// Ré-écriture du fichier avec les nouvelle donnée
// 		fs.writeFile(file, stringDoc, function(err){
// 			// si il y à un erreure affiche la 
// 			if(err){
// 				console.log(err);
// 			}
// 		});
// 	});
// 	// redirige vers hom
// 	res.redirect('/show/animaux');
// });
// écoute le port 1337
app.listen(1337, function(){
	console.log('Work !');
})