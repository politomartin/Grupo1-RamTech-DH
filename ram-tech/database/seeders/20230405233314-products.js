'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('products', [
        {
            "name": "Controles JoyCon",
            "price": 33000,
            "categories_id": 1,
            "brands_id": 1,
            "discount": 15,
            "description": "Controles Nintendo Switch facheritos"
        },
        {
            "name": "Mouse Razer Viper",
            "price": 15000,
            "categories_id": 2,
            "brands_id": 2,
            "discount": 5,
            "description": "Mouse gamer Razer Viper Mini bien fachero"
        },
        {
            "name": "Gabinete Corsair Icue 5000T",
            "price": 130000,
            "categories_id": 3,
            "brands_id": 3,
            "discount": 20,
            "description": "Gabinete Corsair Icue 5000T RGB TG MID-T BLACK"
        },
        {
            "name": "Monitor Samsung Curvo T55",
            "price": 115000,
            "categories_id": 4,
            "brands_id": 4,
            "discount": 0,
            "description": "Monitor Gamer Curvo Samsung T55 C32t550 Led 32 Full Hd Hdmi"
        },
        {
            "name": "Teclado Redragon Kuruma",
            "price": 14500,
            "categories_id": 5,
            "brands_id": 5,
            "discount": 5,
            "description": "Teclado Gamer Redragon Kumara K552 Rainbow Outemu Red Esp"
        },
        {
            "name": "Placa de video Nvidia AorusElite",
            "price": 290000,
            "categories_id": 9,
            "brands_id": 6,
            "discount": 0,
            "description": "Placa De Video Nvidia Gigabyte Geforce Rtx 3060 E-12gd12gb"
        },
        {
            "name": "Micrófono Razer Seiren Mini",
            "price": 22100,
            "categories_id": 6,
            "brands_id": 2,
            "discount": 0,
            "description": "Recomendado para streaming, grabaciones, transmisión, videollamadas, voces."
        },
        {
            "name": "Auriculares Redragon Zeus",
            "price": 16200,
            "categories_id": 7,
            "brands_id": 5,
            "discount": 10,
            "description": "Con retroiluminación RGB, un micrófono excepcional, construcción cómoda y una calidad de sonido arrolladora."
        },
        {
            "name": "Mother Gigabyte B660M AORUS PRO DDR4 S1700",
            "price": 65500,
            "categories_id": 8,
            "brands_id": 5,
            "discount": 25,
            "description": "Las placas base de la serie B660 de GIGABYTE vienen con una solución de energía mejorada, los últimos estándares de almacenamiento y una conectividad excepcional para optimizar el rendimiento de los juegos."
        },
        {
            "name": "Micro AMD RYZEN 5 4500 S/VIDEO BOX AM4",
            "price": 43700,
            "categories_id": 8,
            "brands_id": 6,
            "discount": 0,
            "description": "Línea de productos AMD Ryzen™ 5 Desktop Processors."
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