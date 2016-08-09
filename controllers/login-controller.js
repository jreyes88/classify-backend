// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
// one way to implement middleware for authenticating users w/ login
// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
var Authenticate = require('../app/Authenticate.js');
var bcrypt = require('bcrypt');
const saltRounds = 10;

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
module.exports = function(app, models) {
    console.log('login controller loaded.');
    app.get('/signin', checkAuth, function(req, res) {
        res.send('login successful');
    });
    app.post('/signup', function(req, res) {
        var hashedPassword = bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            if (err) {
                throw err;
            } else {
            	var hashedPassword = hash;
            };
            models.userID.create({
                    // name: req.body.name,
                    username: req.body.userName,
                    password: hashedPassword
                })
        });
        res.end('{"done" : "Updated Successfully", "status" : 200}');
    })
}

// login route
app.post('/login', function(req, res) {
    var post = req.body;
    if (post.user === 'john' && post.password === 'password') {
        req.session.user_id = johns_user_id_here;
        res.redirect('/my_secret_page');
    } else {
        res.send('Bad user/pass');
    }
});

logout route
app.get('/logout', function(req, res) {
    delete req.session.user_id;
    res.redirect('/login');
});
