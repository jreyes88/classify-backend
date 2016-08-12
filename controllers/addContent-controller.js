<<<<<<< HEAD
userID = require('../models/').userID;
userPages = require('../models/').userpage;

// any route that requires a login authentication
 module.exports = function(app, models) {
    console.log('addContent controller loaded.');

    var userID;
    var domain;
    var pageID;
    var pageName;

    app.post('/addcontent', function(req, res) {
        var data = JSON.stringify(req.body);
        pageName = req.body.pageName;
        models.userID.findOne({ where: { username: req.body.username } }).then(function(res) {
            userID = res.id;
            domain = res.domain;
        }).then(function() {
            models.userPage.create({
                title: req.body.pageName,
                userID: userID,
                domain: domain,
                template: "student"
            })
        }).then(function() {
            // this fires after the userPage.create. find a way to make it fire synchronously.
            models.userPage.findOne({
                where: {
                    userID: userID,
                    title: pageName
                }
            })
        }).then(function(res) {
            console.log(res);
            pageID = res.id;
        })
    })
};
=======
 // any route that requires a login authentication
 module.exports = function(app, models) {
     console.log('addContent controller loaded.');

     var userID;
     var domain;
     var pageID;
     var pageName;

     app.post('/addcontent', function(req, res) {
        console.log(req.body);
        console.log(req.body.content.header.name);
         var data = req.body;
         console.log('BODY CONTENT: ' + data);
         models.userID.findOne({ where: { username: req.body.username } }).then(function(res) {
             userID = res.id;
             domain = res.domain;
         }).then(function() {
             models.userPage.create({
                 title: req.body.pageName,
                 userId: userID,
                 domain: domain,
                 template: "student"
             }).then(function(res) {
                 pageID = res.dataValues.id;
             }).then(function() {
                 // for (var i = 0; i < data.content.length; i++) {
                 //     models.userContent.create({
                 //         name: data.content[i].name,
                 //         data: data[i].data,
                 //         dataType: data.content[i].dataType,
                 //         pageId: pageID,
                 //         pagePosition: data.content[i].pagePosition
                 //     }).then(function() {
                 //         console.log('check the fucking database');
                 //     })
                 // }
             })
         })
     })

 };
>>>>>>> 950df82e7d52179047161f87bd811546ac97688e
