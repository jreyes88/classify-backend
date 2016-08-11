// any route that requires a login authentication
module.exports = function(app, models) {
    console.log('admin controller loaded.');

    // app.get('/admin', function(req, res) {
    //     console.log('GET admin route hit');
    //     console.log("session user: " + req.session.user);
    //     if (!req.session.user) {
    //     	console.log('req.session.user does not exist');
    //         res.status(401).send();
    //     } else {
    //         // res.render('admin');
    //         models.userID.findOne({ where: { username: req.session.user } })
    //             .then(function(sessionUser) {
    //                 var hbsObj = {
    //                     username: sessionUser.username,
    //                     email: sessionUser.email
    //                 }
    //                 res.render('admin', hbsObj);
    //             })
    //     }
    // });

    // app.post('/addcontent', function(req, res) {
    //     console.log("This " + req);
    // });
}
