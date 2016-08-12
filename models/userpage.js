'use strict';
module.exports = function(sequelize, DataTypes) {
    var userPage = sequelize.define('userPage', {
        title: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        domain: DataTypes.STRING,
        template: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                userPage.hasMany(models.userContent, {
                    onDelete: 'cascade',
                    foreignKey: 'pageId'
                });
            }
        }
    });
    return userPage;
};
