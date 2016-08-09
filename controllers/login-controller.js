// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
// one way to implement middleware for authenticating users w/ login
// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
var Authenticate = require('../app/Authenticate.js');

function checkAuth(req, res, next) {
    // do any checks you want to in here
	var post = req.body;
	console.log(post);
    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    if (post.user === 'john' && post.password === 'password') {
        return next();
    }
    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.send('login-denied');
}


// any route that requires a login authentication
module.exports = function(app) {
    app.get('/signup', checkAuth, function(req, res) {
        res.send('login successful');
    });
}

// login route
// app.post('/login', function(req, res) {
//     var post = req.body;
//     if (post.user === 'john' && post.password === 'password') {
//         req.session.user_id = johns_user_id_here;
//         res.redirect('/my_secret_page');
//     } else {
//         res.send('Bad user/pass');
//     }
// });

// logout route
// app.get('/logout', function(req, res) {
//     delete req.session.user_id;
//     res.redirect('/login');
// });

