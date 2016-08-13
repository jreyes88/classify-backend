var authenticate = require('../app/Authenticate.js');
var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function(app, models) {
    console.log('login controller loaded.');
    var sessionUser;
    app.get('/admin', function(req, res) {
        if (!sessionUser) {
            return res.status(401).send();
        } else {
            // res.render('admin');
            models.userID.findOne({ where: { username: sessionUser } })
                .then(function(sessionUser1) {
                    var hbsObj = {
                        username: sessionUser1.username,
                        email: sessionUser1.email
                    }
                    res.render('admin', hbsObj);
                })
        }
    });

    app.post('/signin', function(req, res, cb) {
        sessionUser = req.body.username;
        models.userID.findOne({ where: { username: sessionUser } })
            .then(function(loginUser) {
                console.log(loginUser.dataValues);
                if (loginUser !== null) {
                    req.session.user = loginUser.dataValues.username;
                    bcrypt.compare(req.body.password, loginUser.dataValues.password, function(err, result) {
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
        sessionUser = req.body.username;
        models.userID.findOne({ where: { username: sessionUser } })
            .then(function(duplicateUser) {
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
                        }).then(function(result) {
                            sessionUser = result.dataValues.name;
                            res.redirect('/admin');
                        })
                    });
                }
            })
    })
};