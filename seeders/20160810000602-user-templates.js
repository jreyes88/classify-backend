'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('userTemplates', [{
            templateName: 'default',
            description: 'the default template',
            controller: 'admin-controller.js',
            hbsView: 'admin.handlebars'
        }], {});

    },

    down: function(queryInterface, Sequelize) {
  
          return queryInterface.bulkDelete('userTemplates', null, {});
        
    }
};
