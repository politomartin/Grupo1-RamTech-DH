'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
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
        name: 'Memoria RAM',
        icon: 'fa-solid fa-memory'
      },
      {
        name: 'Motherboard',
        icon: 'fa-solid fa-gear'
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
        name: 'Mouses',
        icon: 'fa-solid fa-computer-mouse'
      },
      {
        name: 'Teclados',
        icon: 'fa-regular fa-keyboard'
      },
      {
        name: 'Auriculares',
        icon: 'fa-solid fa-headset'
      },
      {
        name: 'Microfonos',
        icon: 'fa-solid fa-microphone'
      },
      {
        name: 'WebCams',
        icon: 'fa-solid fa-camera'
      },
      {
        name: 'Parlantes',
        icon: 'fa-solid fa-volume-high'
      },
      {
        name: 'Mandos',
        icon: 'fa-solid fa-gamepad'
      }
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
