var express = require('express');
var app = express();

// /-/-/-/-/-/-/-/-/-/-//-/-/-/-/-/-/-/-/-/-/
// dependencies
// /-/-/-/-/-/-/-/-/-/-//-/-/-/-/-/-/-/-/-/-/
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var mutilpart = require('connect-multiparty');
var uploader = require('express-fileuploader');
var mysql = require('mysql');
var OAuth = require('oauth');

// load stylesheets, imgs, etc.
// app.use(express.static(process.cwd() + '/public'));

// parse incoming responses into body
app.use(bodyParser.urlencoded({
	extended: false
}));

// hack the form methods to be more than GET and POST
app.use(methodOverride('_method'));

// sets the 'main.handlebars' file to be the default
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// reference the 'burgers_controller.js' file to handle all the routing endpoints
var routes = require('./controllers/classify-controller.js');
app.use('/', routes);

// set up the Express Server (app) to listen using the 'process.env.PORT' value (aka, the one Heroku assigns, I assume) or PORT 8000
app.listen(process.env.PORT || 3000, function() {
    console.log("server listening on port: " + process.env.PORT);
});