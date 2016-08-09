var express = require('express');
var classify = require('../models')['usercontent', 'userdomain', 'userid', 'userpage', 'usertemplates'];
var router = express.Router();
var authController = require('../controllers/auth-controller.js');

//all of the Seqeulize models.
var models = require('../models');
// var userID = require('../models')['userid'];
// var userContent = require('../models')['usercontent'];
// var userTemplates = require('../models')['usertemplates'];
// var userDomain = require('../models')['userdomain'];
// var userPage = require('../modes')['userpage'];




router.get('/', function(req, res) {
    res.redirect('/classify');
});

router.get('/classify', function(req, res) {
    //
});
console.log('Main router loaded.');
module.exports = router;