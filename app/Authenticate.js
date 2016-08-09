var bcrypt = require('bcrypt');
const saltRounds = 10;

var Authenticate = function() {
    this.newUser = function() {
        app.post('/user/create', function(req, res) {
                console.log(req.body);

                models.userid.create({
                    name: req.body.name,
                    username: req.body.userName,
                    password: bcrypt.hash(req.body.password, saltRounds, function(err, hash) {}),
                    email: req.body.email
                });
                console.log(userid);
                // res.send('Thank you for signing up');
            })
        };

    // NOT BUILT YET ///////////////////////////////////////////
    this.checkUser = function() {

        // Load hash from your password DB. 
        bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
            // res == true 
            console.log('this user would be authenticated if they were real!');
        });
        bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
            // NEED A FAILED LOG IN PAGE
            res.redirect('/classify');
        });
    }
}
console.log('auth package loaded.');
module.exports = Authenticate;
