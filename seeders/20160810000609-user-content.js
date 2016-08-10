'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('userContent', [{
            name: DataTypes.STRING,
            data: DataTypes.STRING,
            dataType: DataTypes.STRING,
            pageID: DataTypes.INTEGER,
            pagePosition: DataTypes.INTEGER
        }], {});

    },

    down: function(queryInterface, Sequelize) {

        return queryInterface.bulkDelete('userContent', null, {});

    }
};
