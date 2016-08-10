'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('userContents', [{
            name: 'Heart Throb Rob',
            data: 'A love story to our non marine T/A',
            dataType: 'header',
            pageID: '3',
            pagePosition: '1'
        },
        {
          name: 'Calendar',
            data: '<iframe src="https://calendar.google.com/calendar/embed?src=lisabattle%40gmail.com&amp;ctz=America/Chicago" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>',
            dataType: 'Calendar',
            pageID: '3',
            pagePosition: '2'
        },
        {
          name: 'Youtube',
            data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7vN_PEmeKb0" frameborder="0" allowfullscreen></iframe>',
            dataType: 'youtube',
            pageID: '3',
            pagePosition: '3'
        },{
          name: 'Text Box',
            data: 'Rob Daly: breaks your heart, not your code.',
            dataType: 'textbox',
            pageID: '3',
            pagePosition: '4'
        }], {});

    },

    down: function(queryInterface, Sequelize) {

        return queryInterface.bulkDelete('userContents', null, {});

    }
};
