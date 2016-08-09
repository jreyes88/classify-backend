var bcrypt = require('bcrypt');
const saltRounds = 10;



var authController = {
    newUser: app.post('/user/create', function(req, res) {
        console.log(req.body);
        
        models.userid.create({
            name: req.body.name,
            username: req.body.userName,
            password: bcrypt.hash(req.body.password, saltRounds, function(err, hash) {});,
            email: req.body.email
        });
        res.send('Thank you for signing up');
    });
    checkUser:
    // Load hash from your password DB. 
        bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
        // res == true 
    });
    bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
        // res == false 
    });

}

module.exports = authController;
