'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('userDomains', [{
            userID: 4,
            domainName: 'hearthrob'
        }], {});

    },

    down: function(queryInterface, Sequelize) {
          return queryInterface.bulkDelete('userDomains', null, {});
        
    }
};
