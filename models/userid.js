'use strict';
module.exports = function(sequelize, DataTypes) {
    var userID = sequelize.define('userID', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        domain: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                userID.belongsTo(userPage, {foreignKey: 'fk_id', tarketKey: 'domain'});
                // userID.hasMany(models.userPage, {
                //     onDelete: 'cascade'
                // });
            }
        }
    });
    return userID;
};
