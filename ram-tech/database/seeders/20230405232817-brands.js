'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('brands', [{
        name: 'Nintendo',
      },
      {
        name: 'Razer',
      },
      {
        name: 'Corsair',
      },
      {
        name: 'Samsung',
      },
      {
        name: 'Redragon',
      },
      {
        name: 'AMD',
      },
      {
        name: 'Nvidia',
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
