// any route that requires a login authentication
module.exports = function(app, models) {
    console.log('addContent controller loaded.');

    app.get('/:user/:page', function(req, res) {
    // 	burger.findAll({}).then(function(data) {
    //     var hbsObject = { burgers: data }
    //     console.log(hbsObject);
    //     res.render('index', hbsObject);
    // });
    });
}
