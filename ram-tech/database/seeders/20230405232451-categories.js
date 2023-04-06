'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('categories', [{
      name: 'Mandos',
    },
    {
      name: 'Mouses',
    },
    {
      name: 'Gabinetes',
    },
    {
      name: 'Monitores',
    },
    {
      name: 'Teclados',
    },
    {
      name: 'Microfonos',
    },
    {
      name: 'Auriculares',
    },
    {
      name: 'Procesadores',
    },
    {
      name: 'Placas de video',
    },
  ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
