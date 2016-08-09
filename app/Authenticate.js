var bcrypt = require('bcrypt');
const saltRounds = 10;

var Authenticate = function() {
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
