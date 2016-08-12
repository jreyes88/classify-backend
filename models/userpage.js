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
                // userPage.hasOne(models.userID);
                // userPage.hasMany(models.userContent, {
                //     onDelete: 'cascade'
                // });
                // userPage.belongsTo(userID, {foreignKey: 'fk_id', tarketKey: 'domain'});
            }
        }
    });
    return userPage;
};
