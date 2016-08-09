var express = require('express');

var classify = require('../models')['usercontent', 'userdomain', 'userid', 'userpage', 'usertemplates'];
var router = express.Router();
var authcontroller = require('./controllers/auth-controller.js');

router.get('/', function(req, res) {
    res.redirect('/classify');
});

router.get('/classify', function(req, res) {
    //
});

module.exports = router;