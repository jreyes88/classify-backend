var express = require('express');
var models = require('../models');
var router = express.Router();
var loginController = require('./login-controller.js');



loginController(router, models);

router.get('/', function(req, res) {
    res.redirect('/classify');
});

router.get('/classify', function(req, res) {
    //
});
console.log('Main router loaded.');
module.exports = router;