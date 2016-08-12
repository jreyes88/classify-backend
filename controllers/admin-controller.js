// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
// one way to implement middleware for authenticating users w/ login
// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// any route that requires a login authentication
module.exports = function(app, models) {
    console.log('admin controller loaded.');

    app.post('/addcontent', function(req, res) {
        console.log("This " + req);
    });
}