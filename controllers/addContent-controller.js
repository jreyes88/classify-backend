 // any route that requires a login authentication
 module.exports = function(app, models) {
     console.log('addContent controller loaded.');

     var userID;
     var domain;
     var pageID;
     var pageName;





     app.post('/addcontent', function(req, res) {
         console.log('ITS WORKING RIGHT HERE!');
         console.log(req.body);
         models.userID.findOne({ where: { username: req.body.username } }).then(function(res) {
             userID = res.id;
             domain = res.domain;
         }).then(function(res) {
             models.userPage.create({
                 title: req.body.pageName,
                 userID: userID,
                 domain: domain,
                 template: "student"
             })
             pageName = req.body.pageName;
         }).then(function() {
             models.userPage.findOne({
                 where: {
                     userID: userID,
                     title: pageName
                 }
             }).done(function(res) {
                 console.log(res.dataValues.id);
             })
         })
     });
 }
