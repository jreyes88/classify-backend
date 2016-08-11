'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('userPages', [{
    title: 'Home',
    userID: 1,
    domain: 'ihatekids',
    template: 'default'
      }, {
    title: 'First Page',
    userID: 2,
    domain: 'ilovekids',
    template: 'default'
  }, {
    title: 'I heart Rob',
    userID: 3,
    domain: 'hearthrob',
    template: 'default'
  }], {});
    
  },

  down: function (queryInterface, Sequelize) {
   
      return queryInterface.bulkDelete('userPages', null, {});
  }
};
