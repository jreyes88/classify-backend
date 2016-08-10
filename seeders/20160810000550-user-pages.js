'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('userPages', [{
        title: 'Home',
    domain: 'ihatekids',
    template: 'default'
      }, {
        title: 'First Page',
    domain: 'ilovekids',
    template: 'default'
  }, {
    title: 'I heart Rob',
    domain: 'hearthrob',
    template: 'default'
  }], {});
    
  },

  down: function (queryInterface, Sequelize) {
   
      return queryInterface.bulkDelete('userPages', null, {});
  }
};
