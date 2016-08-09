'use strict';
module.exports = function(sequelize, DataTypes) {
  var userTemplates = sequelize.define('userTemplates', {
    templateName: DataTypes.STRING,
    description: DataTypes.STRING,
    controller: DataTypes.STRING,
    hbsView: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userTemplates;
};