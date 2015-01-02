// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var path 		   = require('path');

// configuration ===========================================
app.engine('html', require('ejs').renderFile);
 
// all environments
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'html');

// config files for db connection <later>
//var db = require('./config/db');
//mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

//define locations to find static text.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/lib')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/img')));

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

//if resource not found then 404
app.use(function(req, res, next){
  res.send(404, 'Sorry cant find that!');
});

// start app ===============================================
app.listen(app.get('port'));
	
console.log('server started on port: ' + app.get('port'));
exports = module.exports = app; 					// expose app