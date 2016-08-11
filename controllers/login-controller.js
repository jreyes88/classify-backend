// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
// one way to implement middleware for authenticating users w/ login
// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
var authenticate = require('../app/Authenticate.js');
var bcrypt = require('bcrypt');
const saltRounds = 10;

// any route that requires a login authentication
module.exports = function(app, models) {
    console.log('login controller loaded.');

    app.get('/admin', function(req, res) {
        console.log('GET admin route hit');
        console.log("foo: " + req.session.user);
        if (!req.session.user) {
            return res.status(401).send();
        } else {
            // req.session.user = 
            res.render('admin');
            // return res.status(200).send("welcome to logged in page");
        }
        // console.log("foo: " + JSON.stringify(hbsObject, null, 2));
    });

    app.post('/signin', function(req, res) {
        // console.log(req.body.username);
        models.userID.findOne({ where: { username: req.body.username } })
            .then(function(loginUser) {
                console.log(loginUser.dataValues);
                if (loginUser !== null) {
                    req.session.user = loginUser.dataValues.username;
                    // var auth = authenticate(req.body.password, loginUser.password);
                    // console.log('auth is: ' + auth);
                    bcrypt.compare(req.body.password, loginUser.dataValues.password, function(err, result) {
                        console.log(result);
                        if (result === true) {
                            console.log('login successful');

                            // /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
                            // express session
                            // /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

                            // /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
                            res.redirect('/admin');
                        } else {
                            console.log('login failed');
                        }
                    });
                } else {
                    console.log('no user found');
                    return res.status(404).send();
                }
                });
            // res.end('{"done" : "redirecting after login", "status" : 200}');
            });

    app.post('/signup', function(req, res) {
        models.userID.findOne({ where: { username: req.body.username } })
            .then(function(duplicateUser) {
                console.log("Duplicate user: " + JSON.stringify(duplicateUser));
                if (duplicateUser) {
                    // window.alert('Please select a different user name!');
                    res.redirect('/signup');
                } else {


                    console.log('signing up!');
                    var hashedPassword = bcrypt.hash(req.body.signupPw, saltRounds, function(err, hash) {
                        if (err) {
                            throw err;
                        } else {
                            var hashedPassword = hash;
                        };
                        console.log(hashedPassword);

                        console.log(req.body);

                        models.userID.create({
                            name: req.body.signupName,
                            username: req.body.signupUsername,
                            password: hashedPassword,
                            domain: req.body.signupDomain,
                            email: req.body.signupEmail
                        })
                    });
                    // res.end('{"done" : "Updated Successfully", "status" : 200}');
                }
            })

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
