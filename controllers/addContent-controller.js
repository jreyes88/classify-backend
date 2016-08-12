 // any route that requires a login authentication
 module.exports = function(app, models) {
     console.log('addContent controller loaded.');

     var userID;
     var domain;
     var pageID;
     var pageName;

     app.post('/addcontent', function(req, res) {
         var data = req.body;
         pageName = req.body.pageName;
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
                console.log(data);
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
