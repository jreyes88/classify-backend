'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('userTemplates', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            templateName: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            controller: {
                type: Sequelize.STRING
            },
            hbsView: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()

            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()

            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('userTemplates');
    }
};
