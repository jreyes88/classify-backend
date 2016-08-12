var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function(app, models)
    {
        console.log('login controller loaded.');
        app.get('/admin', function(req, res)
            {
                console.log('GET admin route hit');
                if (!req.session.user)
                    {
                        return res.status(401).send();
                    } else {
                        models.userID.findOne(
                            {
                                where:
                                    {
                                        username: req.session.user
                                    }
                            }
                        )
                        .then(function(sessionUser)
                            {
                                var hbsObj = 
                                    {
                                        username: sessionUser.username,
                                        email: sessionUser.email
                                    }
                                res.render('admin', hbsObj);
                            }
                        )
                    }
            }
        );

        app.post('/signin', function(req, res, cb)
            {
                models.userID.findOne(
                    {
                        where:
                            {
                                username: req.body.username
                            }
                    }
                )
                .then(function(loginUser)
                    {
                        if (loginUser !== null)
                            {
                                req.session.user = loginUser.dataValues.username;
                                bcrypt.compare(req.body.password, loginUser.dataValues.password, function(err, result)
                                    {
                                        console.log(result);
                                        if (result === true)
                                            {
                                                console.log('login successful');
                                                res.redirect('/admin');
                                            } else {
                                                console.log('login failed');
                                            }
                                    }
                                )
                            } else {
                                console.log('no user found');
                                res.status(404).send();
                                res.redirect('/');
                            }
                    }
                );
            }
        );

        app.post('/signup', function(req, res)
            {
                models.userID.findOne(
                    {
                        where:
                            {
                                username: req.body.username
                            }
                    }
                )
                .then(function(duplicateUser)
                    {
                        console.log("Duplicate user: " + JSON.stringify(duplicateUser));
                        if (duplicateUser) 
                            {
                                res.redirect('/signup');
                            } else {
                                console.log('signing up!');
                                var hashedPassword = bcrypt.hash(req.body.signupPw, saltRounds, function(err, hash)
                                    {
                                        if (err)
                                            {
                                                throw err;
                                            } else {
                                                var hashedPassword = hash;
                                            };
                                            models.userID.create(
                                                {
                                                    name: req.body.signupName,
                                                    username: req.body.signupUsername,
                                                    password: hashedPassword,
                                                    domain: req.body.signupDomain,
                                                    email: req.body.signupEmail
                                                }
                                            )
                                    }
                                )
                            }
                    }
                )
                req.session.user = req.body.signupName;
                console.log("session user: " + req.session.user);
            }
        )
    };