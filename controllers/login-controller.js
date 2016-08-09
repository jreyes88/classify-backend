// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
// one way to implement middleware for authenticating users w/ login
// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
var authenticate = require('../app/Authenticate.js');
var bcrypt = require('bcrypt');
const saltRounds = 10;

// function checkAuth(req, res, next) {
//     // do any checks you want to in here
//     console.log(req.body);
//     models.userID.findOne({where: { username: req.body.username}})
//     .then(function(users){
//   		console.log(users);
//     })
// CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
// var checkedPassword = Authenticate.checkUser();
// // you can do this however you want with whatever variables you set up
// if (checkedPassword === true) {
//     return next();
// } else {
//     // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
//     res.send('Try again!');
// }
// }


// any route that requires a login authentication
module.exports = function(app, models) {
    console.log('login controller loaded.');
    app.post('/signin', function(req, res) {
        console.log(req.body);
        models.userID.findOne({ where: { username: req.body.userName } }).then(function(loginUser) {
            if (loginUser !== null) {
                var auth = authenticate(req.body.password, loginUser.password);
                console.log("auth returns " + auth);
                if (auth === true) {
                    res.send('it worked!');
                } else {
                    res.send('login failed');
                }
            } else {
                res.send('no user found!');
            }
        })
    })
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
};

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
