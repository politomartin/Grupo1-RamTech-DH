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
        },
        {
            "name": "Disco HDD Barracuda 1TB",
            "price": 25000,
            "categories_id": 10,
            "brands_id": 6,
            "discount": 0,
            "description": "Elige una gran capacidad de almacenamiento con el disco duro Seagate Barracuda 1 TB. Esta gama domina el mercado ofreciendo las mejores capacidades para ordenadores de sobremesa y los periféricos móviles. Estos discos son idóneos para las mejoras y se adaptan a todos los presupuestos."
        },
        {
            "name": "Disco SSD Kingston 480GB",
            "price": 14000,
            "categories_id": 10,
            "brands_id": 6,
            "discount": 0,
            "description": "La unidad A400 de estado sólido de Kingston ofrece enormes mejoras en la velocidad de respuesta, sin actualizaciones adicionales del hardware. Brinda lapsos de arranque, carga y de transferencia de archivos increíblemente más breves en comparación con las unidades de disco duro mecánico. Apoyada en su controlador de la más reciente generación, que ofrece velocidades de lectura y escritura de hasta 500 MB/s y 450 MB/s1, respectivamente, esta unidad SSD es 10 veces más rápida que los discos duros tradicionales y provee un mejor rendimiento, velocidad de respuesta ultrarrápida en el procesamiento multitareas y una aceleración general del sistema. Además son más fiables y duraderas que las unidades de disco duro, y están disponibles en varias capacidades que van de 120 GB hasta 960 GB2."
        },
        {
            "name": "Disco HDD WD Blue 2TB",
            "price": 50000,
            "categories_id": 10,
            "brands_id": 6,
            "discount": 10,
            "description": "Amplíe la capacidad de almacenamiento de su ordenador con los discos WD Blue, diseñados especialmente para ordenadores de sobremesa y todo en uno con diversas capacidades de almacenamiento."
        },
        {
            "name": "Auricular Gamer Logitech G733 Lightspeed Rgb Inalámbrico Violeta",
            "price": 60000,
            "categories_id": 7,
            "brands_id": 6,
            "discount": 0,
            "description": "Audífonos inalámbricos con micrófono para juegos diseñados para desempeño y confort. Equipados con todo el sonido envolvente, los filtros de voz y la iluminación avanzada que necesitas para lucir, sonar y jugar con más estilo que nunca."
        },
        {
            "name": "Auricular Gamer Redragon Icon H520",
            "price": 27500,
            "categories_id": 7,
            "brands_id": 6,
            "discount": 0,
            "description": "Los Icon son auriculares estéreo de altísima calidaddotados de un potente sistema 7.1 virtual que expanderadicalmente la espacialidad del sonido, creando unaatmósfera inmersiva de 360º. Son perfectos para elgaming en todas sus facetas, pero se destacanespecialmente en los FPS, donde la espacialidadsonora aumentada se transforma en una verdaderaventaja competitiva."
        },
        {
            "name": "Auricular Gamer HyperX Cloud Blue Ps5 Ps4 Negro y Azul",
            "price": 34000,
            "categories_id": 7,
            "brands_id": 6,
            "discount": 0,
            "description": "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX Cloud Alpha S no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores."
        },
        {
            "name": "Gabinete Mid Tower Aerocool Mirage Negro",
            "price": 38999,
            "categories_id": 3,
            "brands_id": 6,
            "discount": 0,
            "description": "Los ventiladores RGB direccionables se pueden controlar mediante una de dos formas: botón de control LED RGB o placa base RGB direccionable. Incluye un concentrador de control ARGB de 6 puertos para conectar y controlar sus ventiladores ARGB. DISEÑO INFINITY MIRROR ARGB"
        },
        {
            "name": "Gabinete Mid Tower Corsair 220T Rgb Vidrio Templado Negro",
            "price": 25000,
            "categories_id": 3,
            "brands_id": 6,
            "discount": 0,
            "description": ""
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