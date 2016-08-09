var bcrypt = require('bcrypt');
const saltRounds = 10;

var authenticate = function(password, hash) {
    console.log('in the check user function');
    // Load hash from your password DB.
    var result;
    bcrypt.compare(password, hash, function(err, res) {
        result = res;
        return result;
    });
    return result;
}

console.log('auth package loaded.');
module.exports = authenticate;
