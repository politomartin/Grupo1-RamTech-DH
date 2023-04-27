'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('categories', [{
      name: 'Mandos',
      icon: 'fa-solid fa-gamepad'
    },  
    {
      name: 'Mouses',
      icon: 'fa-solid fa-computer-mouse'
    },
    {
      name: 'Gabinetes',
      icon: 'fa-solid fa-computer'
    },
    {
      name: 'Monitores',
      icon: 'fa-solid fa-display'
    },
    {
      name: 'Teclados',
      icon: 'fa-regular fa-keyboard'
    },
    {
      name: 'Microfonos',
      icon: 'fa-solid fa-microphone'
    },
    {
      name: 'Auriculares',
      icon: 'fa-solid fa-headset'
    },
    {
      name: 'Procesadores',
      icon: 'fa-solid fa-microchip'
    },
    {
      name: 'Placas de video',
      icon: 'fa-solid fa-eye'
    },
    {
      name: 'Almacenamiento',
      icon: 'fa-solid fa-hard-drive'
    },
      {
      name: 'WebCams',
      icon: 'fa-solid fa-video'
    },
    {
      name: 'Parlantes',
      icon: 'fa-solid fa-volume-high'
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
