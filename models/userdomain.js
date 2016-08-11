'use strict';
module.exports = function(sequelize, DataTypes) {
  var userDomain = sequelize.define('userDomain', {
    userID: DataTypes.INTEGER,
    domainName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userDomain;
};