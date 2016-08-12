var authenticate = require('../app/Authenticate.js');
var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function(app, models) {
    console.log('login controller loaded.');

    app.get('/admin', function(req, res) {
        console.log('GET admin route hit');
        console.log("foo: " + req.session.user);
        if (!req.session.user) {
            return res.status(401).send();
        } else {
            res.render('admin');
        }
    });

    app.post('/signin', function(req, res) {
        models.userID.findOne({ where: { username: req.body.username } })
            .then(function(loginUser) {
                console.log(loginUser.dataValues);
                if (loginUser !== null) {
                    req.session.user = loginUser.dataValues.username;
                    bcrypt.compare(req.body.password, loginUser.dataValues.password, function(err, result) {
                        console.log(result);
                        if (result === true) {
                            console.log('login successful');
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
            });

    app.post('/signup', function(req, res) {
        models.userID.findOne({ where: { username: req.body.username } })
            .then(function(duplicateUser) {
                console.log("Duplicate user: " + JSON.stringify(duplicateUser));
                if (duplicateUser) {
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
                }
            })

    })
};

// logout route
// app.get('/logout', function(req, res) {
//     delete req.session.user_id;
//     res.redirect('/login');
// });