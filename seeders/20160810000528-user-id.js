'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('userIDs', [{
            name: 'Chance',
            username: 'Chance',
            password: 'password1',
            domain: 'loudmouth',
            email: 'fake@email.com'
        }, {
            name: 'Lisa',
            username: 'Lisa',
            password: 'password2',
            domain: 'consultant',
            email: 'fake2@email.com'
        }, {
            name: 'Derrick',
            username: 'Derrick',
            password: 'password3',
            domain: 'retiredteacher',
            email: 'fake3@email.com'
        }, {
            name: 'Joey',
            username: 'theHammer',
            password: 'password4',
            domain: 'coffeedealer',
            email: 'fake4@email.com'
        }, {
            name: 'John',
            username: 'John',
            password: 'password5',
            domain: 'hipaaviolations',
            email: 'fake5@email.com'
        }
        ], {});

    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('userIDs', null, {});
    }
};

