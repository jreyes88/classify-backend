// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
// one way to implement middleware for authenticating users w/ login
// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// any route that requires a login authentication
module.exports = function(app, models) {
    console.log('admin controller loaded.');

    app.post('/signin', function(req, res) {

    });

    app.post('/signup', function(req, res) {
        models.userID.findOne({ where: { username: req.body.userName } })
            .then(function(duplicateUser) {
                console.log("Duplicate user: " + JSON.stringify(duplicateUser));
                if (duplicateUser) {
                    // window.alert('Please select a different user name!');
                    res.redirect('/signup');
                } else {
                    console.log('signing up!');
                    var hashedPassword = bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                        if (err) {
                            throw err;
                        } else {
                            var hashedPassword = hash;
                        };
                        console.log(hashedPassword);

                        console.log(req.body);

                        models.userID.create({
                            name: req.body.name,
                            username: req.body.username,
                            password: hashedPassword,
                            domain: req.body.domain,
                            email: req.body.email
                        })
                    });
                    res.end('{"done" : "Updated Successfully", "status" : 200}');
                }
            })

    })
};