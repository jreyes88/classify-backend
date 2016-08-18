'use strict';
module.exports = function(sequelize, DataTypes) {
  var userContent = sequelize.define('userContent', {
    name: DataTypes.STRING,
    data: DataTypes.STRING,
    dataType: DataTypes.STRING,
    pageId: DataTypes.INTEGER,
    pagePosition: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return userContent;
};