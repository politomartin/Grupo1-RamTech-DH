'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('brands', [
      {
        name: 'Razer',
      },
      {
        name: 'Corsair',
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
      {
        name: 'Asus',
      },
      {
        name: 'Kingston',
      },
      {
        name: 'Noblex',
      },
      {
        name: 'Logitech',
      },
      {
        name: 'HyperX',
      },
      {
        name: 'LG',
      },
      {
        name: 'Philips',
      },
      {
        name: 'Samsung',
      },
      {
        name: 'Nintendo',
      },
      {
        name: 'Other',
      }
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
