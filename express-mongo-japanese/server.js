var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var routes = require('./routes/index');
var users  = require('./routes/users');

// create an Express application:
var app = express();

// view engine setup:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// set up some middleware:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// point to the routes and users:
app.use('/', routes);
app.use('/users', users);

// connect to the Mongo 'users' instance 
var japanesedb = "japanese";
var url = "mongodb://127.0.0.1:27017/"+japanesedb;
var mongoose = require("mongoose");
mongoose.connect(url);

// define a Mongoose user schema:
var userSchema = new mongoose.Schema ({
    empid: String,
    fname: String,
    lname: String
});

// create/save a 'test' user: 
//var User = mongoose.model ('User', userSchema);
//var testuser = new User( {empid:1000, fname: 'John', lname: 'Smith'} );
//testuser.save();

module.exports = app;
