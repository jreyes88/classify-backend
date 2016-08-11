var express = require('express');
var models = require('../models');
var router = express.Router();
var loginController = require('./login-controller.js');
var domainController = require('./domain-controller.js');
var contentController = require('./addContent-controller.js');
var adminController = require('./admin-controller.js');


loginController(router, models);
domainController(router, models);
contentController(router, models);
adminController(router, models);

// router.get('/', function(req, res) {
//     res.redirect('/classify');
// });

router.get('/', function(req, res) {
	res.render('index');
})

console.log('Main router loaded.');

// router.get('/createDomain', function(req, res) {
// 	res.render('./partials/domSubmission');
// });

module.exports = router;