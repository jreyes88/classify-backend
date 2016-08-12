'use strict';
module.exports = function(sequelize, DataTypes) {
    var userPage = sequelize.define('userPage', {
        title: DataTypes.STRING,
        userID: DataTypes.INTEGER,
        domain: DataTypes.STRING,
        template: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                userPage.hasOne(models.userID);
                userPage.hasMany(models.usercontent, {
                    onDelete: 'cascade'
                });
            }
        }
    });
    return userPage;
};
