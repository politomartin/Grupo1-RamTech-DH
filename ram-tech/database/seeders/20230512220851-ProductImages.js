'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_images', [
      {
        name: 'joy-con01.jpg',
        product_id: 1
      },
      {
        name: 'joy-con02.jpg',
        product_id: 1
      },
      {
        name: 'joy-con03.jpg',
        product_id: 1
      },
      {
        name: 'joy-con04.jpg',
        product_id: 1
      },
      {
        name: 'joy-con05.jpg',
        product_id: 1
      },
      {
        name: 'joystick-ps5-1.jpg',
        product_id: 2
      },
      {
        name: 'joystick-ps5-2.jpg',
        product_id: 2
      },
      {
        name: 'joystick-ps5-3.jpg',
        product_id: 2
      },
      {
        name: 'joystick-xbox-1.jpg',
        product_id: 3
      },
      {
        name: 'Mouse-RazerViper-1.jpg',
        product_id: 4
      },
      {
        name: 'Mouse-HyperXPulsefire-1.PNG',
        product_id: 5
      },
      {
        name: 'Mouse-HyperXPulsefire-2.PNG',
        product_id: 5
      },
      {
        name: 'Mouse-LogitechPro-1.PNG',
        product_id: 6
      },
      {
        name: 'Mouse-LogitechPro-2.PNG',
        product_id: 6
      },
      {
        name: 'gabinete-corsair-5000T.PNG',
        product_id: 7,
      },
      {
        name: 'gabinete-solarmax-5901-6.jpeg',
        product_id: 8,
      },
      {
        name: 'gabinete-aerocool-mirage-negro.jpeg',
        product_id: 9,
      },
      {
        name: 'gabinete-aerocool-mirage-negro2.jpeg',
        product_id: 9,
      },
      {
        name: 'gabinete-aerocool-mirage-negro3.jpeg',
        product_id: 9,
      },
      {
        name: 'gabinete-corsair220T-1.PNG',
        product_id: 10,
      },
      {
        name: 'gabinete-corsair220T-2.PNG',
        product_id: 10,
      },
      {
        name: 'monitor-samsung.jpg',
        product_id: 11,
      },
      {
        name: 'monitor-lg-1.jpeg',
        product_id: 12,
      },
      {
        name: 'monitor-asus-1.jpeg',
        product_id: 13,
      },
      {
        name: 'teclado-redragon.jpg',
        product_id: 14,
      },
      {
        name: 'Teclado-HyperXAlloyOriginsCore-1.PNG',
        product_id: 15,
      },
      {
        name: 'Teclado-HyperXAlloyOriginsCore-2.PNG',
        product_id: 15,
      },
      {
        name: 'Teclado-RazerHuntsman-1.PNG',
        product_id: 16,
      },
      {
        name: 'Teclado-RazerHuntsman-2.PNG',
        product_id: 16,
      },
      {
        name: 'microfono-razer.jpg',
        product_id: 17,
      },
      {
        name: 'microfono-blue-condenser.jpeg',
        product_id: 18,
      },
      {
        name: 'microfono-blue-condenser2.jpeg',
        product_id: 18,
      },
      {
        name: 'microfono-redragon.jpeg',
        product_id: 19,
      },
      {
        name: 'microfono-redragon2.jpeg',
        product_id: 19,
      },
      {
        name: 'microfono-redragon3.jpeg',
        product_id: 19,
      },
      {
        name: 'auris-redragonZeus-1.PNG',
        product_id: 20,
      },
      {
        name: 'auris-redragonZeus-2.PNG',
        product_id: 20,
      },
      {
        name: 'auriculares-logitech.jpeg',
        product_id: 21,
      },
      {
        name: 'auris-redragonIconH520-1.PNG',
        product_id: 22,
      },
      {
        name: 'auris-redragonIconH520-2.PNG',
        product_id: 22,
      },
      {
        name: 'auris-redragonIconH520-3.PNG',
        product_id: 22,
      },
      {
        name: 'auricular-hyperx-1.jpeg',
        product_id: 23,
      },
      {
        name: 'Procesador-Amd-Ryzen-3-4100-4-Ghz-AM4-Sin-Gpu_45281_1.jpeg',
        product_id: 24,
      },
      {
        name: 'Procesador-Amd-Ryzen-3-4100-4-Ghz-AM4-Sin-Gpu_45281_2.jpeg',
        product_id: 24,
      },
      {
        name: 'Procesador-Amd-Ryzen-3-4100-4-Ghz-AM4-Sin-Gpu_45281_3.jpeg',
        product_id: 24,
      },
      {
        name: 'Procesador-Amd-Ryzen5-1.jpg',
        product_id: 25,
      },
      {
        name: 'Procesador-Amd-Ryzen5-2.jpg',
        product_id: 25,
      },
      {
        name: 'Procesador-Amd-Ryzen-7-7700X-5Ghz-AM5-Sin-Cooler_44153_1.jpeg',
        product_id: 26,
      },
      {
        name: 'Procesador-Amd-Ryzen-7-7700X-5Ghz-AM5-Sin-Cooler_44153_2.jpeg',
        product_id: 26,
      },
      {
        name: 'Procesador-Amd-Ryzen-7-7700X-5Ghz-AM5-Sin-Cooler_44153_3.jpeg',
        product_id: 26,
      },
      {
        name: 'placavideo-aorus3060.jpg',
        product_id: 27,
      },
      {
        name: 'placavide-msigt1030-1.jpeg',
        product_id: 28,
      },
      {
        name: 'placavide-msigt1030-2.jpeg',
        product_id: 28,
      },
      {
        name: 'placavideo-asusrtx4080-1.jpeg',
        product_id: 29,
      },
      {
        name: 'placavideo-gigabyte-1.jpeg',
        product_id: 30,
      },
      {
        name: 'Almacenamiento-Barracuda1T-1.PNG',
        product_id: 31,
      },
      {
        name: 'Almacenamiento-Barracuda1T-2.PNG',
        product_id: 31,
      },
      {
        name: 'Almacenamiento-Kingston480GB-1.PNG',
        product_id: 32,
      },
      {
        name: 'Almacenamiento-Kingston480GB-2.PNG',
        product_id: 32,
      },
      {
        name: 'Almacenamiento-WesternDigital2T-1.PNG',
        product_id: 33,
      },
      {
        name: 'Almacenamiento-WesternDigital2T-2.PNG',
        product_id: 33,
      },
      {
        name: 'memoriaram-corsairvengance-1.jpeg',
        product_id: 34,
      },
      {
        name: 'memoriaram-corsairvengance-2.jpeg',
        product_id: 34,
      },
      {
        name: 'memoriaram-corsairdominator-1.PNG',
        product_id: 35,
      },
      {
        name: 'memoriaram-corsairdominator-2.PNG',
        product_id: 35,
      },
      {
        name: 'memoriaram-corsairdominator-3.PNG',
        product_id: 35,
      },
      {
        name: 'memoriaram-hyperxfury-1.jpeg',
        product_id: 36,
      },
      {
        name: 'mother-gigabyte.jpg',
        product_id: 37,
      },
      {
        name: 'Motherboard-AM4-Asrock-B550M-HDV_44574_1.jpeg',
        product_id: 38,
      },
      {
        name: 'Motherboard-AM4-Asrock-B550M-HDV_44574_2.jpeg',
        product_id: 38,
      },
      {
        name: 'Motherboard-AM4-Asrock-B550M-HDV_44574_3.jpeg',
        product_id: 38,
      },
      {
        name: 'Motherboard-AM4-Msi-B450-GAMING-PLUS-MAX_44046_2.jpeg',
        product_id: 39,
      },
      {
        name: 'Motherboard-AM4-Msi-B450-GAMING-PLUS-MAX_44046_3.jpeg',
        product_id: 39,
      },
      {
        name: 'Motherboard-AM4-Msi-B450-GAMING-PLUS-MAX_44046_4.jpeg',
        product_id: 39,
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('product_images', null, {});
     */
  }
};
