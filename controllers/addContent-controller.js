// any route that requires a login authentication
module.exports = function(app, models) {
     console.log('addContent controller loaded.');

     var userID;
     var domain;
     var pageID;
     var pageName;

     app.post('/addcontent', function(req, res) {
         var data = req.body;
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
             }).then(function(res) {
                 pageID = res.id;
             }).then(function() {
                 for (var i = 0; i < data.content.length; i++) {
                     models.userContent.create({
                         name: DataTypes.STRING,
                         data: DataTypes.STRING,
                         dataType: DataTypes.STRING,
                         pageID: DataTypes.INTEGER,
                         pagePosition: DataTypes.INTEGER
                     })
                 }
             })
         })
     });
 }