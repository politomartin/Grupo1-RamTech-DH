'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('products', [
            {
                "name": "Controles JoyCon",
                "price": 33000,
                "categories_id": 1,
                "brands_id": 1,
                "discount": 15,
                "description": "Un control o dos, control en vertical o en horizontal, acoplados a la consola o separados. Dependiendo del juego podrás jugar de múltiples maneras"
            },
            {
                "name": "Joystick PS5",
                "price": 28000,
                "categories_id": 1,
                "brands_id": 3,
                "discount": 5,
                "description": "Este excelente Joystick de PS5 cuenta con una buena respuesta táctil, con micrófono integrado y conector de auriculares"
            },
            {
                "name": "Joystick XBOX",
                "price": 22000,
                "categories_id": 1,
                "brands_id": 3,
                "discount": 0,
                "description": "Experimenta el diseño modernizado del control inalámbrico Xbox en negro, con superficies moldeadas y geometría refinada para mayor comodidad y control sin esfuerzo durante el juego, con un rendimiento de la batería de hasta 40 horas"
            },
            {
                "name": "Mouse Razer Viper",
                "price": 15000,
                "categories_id": 2,
                "brands_id": 2,
                "discount": 5,
                "description": "Olvídate de lo convencional y consigue la ventaja injusta con el Razer Viper: un mouse inalámbrico para juegos creado para ganar. Diseñado para ser una auténtica extensión del jugador, este depredador letal viene equipado con nuestra más alta tecnología, listo para clavar sus colmillos en la competencia"
            },
            {
                "name": "Mouse HyperX Pulsefire",
                "price": 36000,
                "categories_id": 2,
                "brands_id": 2,
                "discount": 5,
                "description": "Hasta 100 horas de duración de la batería: el Pulsefire Wireless obtiene hasta 100 horas de duración de la batería con una carga completa, por lo que pasarás más tiempo acumulando victorias y menos tiempo cargando al lado"
            },
            {
                "name": "Mouse Logitech GPRO",
                "price": 60000,
                "categories_id": 2,
                "brands_id": 2,
                "discount": 5,
                "description": "Fabricado con y para jugadores profesionales: diseñado durante dos años con entrada directa de muchos jugadores profesionales de deportes electrónicos, el mouse Pro Wireless para juegos está diseñado para un rendimiento extremo"
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
                "name": "Gabinete Mid Tower Solarmax 5901",
                "price": 29000,
                "categories_id": 3,
                "brands_id": 6,
                "discount": 0,
                "description": "Gabinete Mid Tower con lateral y frente de vidrio templado ultra transparente que permite visualizar y disfrutar del interior de tu equipo con una experiencia maravillosa"
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
                "price": 70000,
                "categories_id": 3,
                "brands_id": 3,
                "discount": 15,
                "description": "Disfruta de una PC bonita y estética gracias a este Gabinete Corsair 220T"
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
                "name": "Monitor LG UltraGear 144hz",
                "price": 155000,
                "categories_id": 4,
                "brands_id": 4,
                "discount": 0,
                "description": "LG busca entender a los usuarios para ofrecerles óptimas soluciones y nuevas experiencias a través de la evolución tecnológica. Disfrutá de la perfecta combinación de diseño, calidad y rendimiento que la empresa te ofrece en este monitor"
            },
            {
                "name": "Monitor Gamer 24 Asus Full Hd 165Hz",
                "price": 144000,
                "categories_id": 4,
                "brands_id": 4,
                "discount": 0,
                "description": "Pantalla Full HD de 24 pulgadas (1920 x 1080) con una frecuencia de actualización rápida de 165 Hz overclockable (soporta 144 Hz) y tiempo de respuesta de 0,5 ms (GTG). La tecnología NVIDIA G-SYNC elimina el tartamudeo y el desgarro de la pantalla para una experiencia de juego más suave"
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
                "name": "Teclado HyperX Alloy Origins Core",
                "price": 70000,
                "categories_id": 5,
                "brands_id": 5,
                "discount": 10,
                "description": "Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel"
            },
            {
                "name": "Teclado Razer Huntsman",
                "price": 81000,
                "categories_id": 5,
                "brands_id": 5,
                "discount": 5,
                "description": "Entra en una nueva dimensión letal con el Razer Huntsman Mini: un teclado para juegos reducido al 60 % de su tamaño y con sus punteros switches ópticos Razer. Portátil e ideal para escritorios reducidos, es hora de experimentar un accionamiento a la velocidad de la luz con nuestro diseño más compacto hasta la fecha"
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
                "name": "Micrófono Blue Condenser",
                "price": 55000,
                "categories_id": 6,
                "brands_id": 1,
                "discount": 0,
                "description": "La comunicación clara y poderosa es importante para todas las organizaciones. Los micrófonos de Blue te permiten capturar y transmitir con una calidad de sonido sorprendente. Blue combina audio de calidad profesional con la simplicidad plug-and-play para ofrecer un rendimiento que está a años luz de los micrófonos integrados para portátiles y cámaras"
            },
            {
                "name": "Micrófono Redragon BLAZAR GM300",
                "price": 28000,
                "categories_id": 6,
                "brands_id": 5,
                "discount": 0,
                "description": "Al ser condensador, posibilitará un resultado claro y fino. Es ideal para percusiones, guitarras, pianos, entre otros. Por su respuesta tan definida ante la voz, es el más elegido por los profesionales"
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
                "name": "Micro AMD RYZEN 3 4100 | 4 núcleos y 8 hilos",
                "price": 35700,
                "categories_id": 8,
                "brands_id": 6,
                "discount": 0,
                "description": "Puede ofrecer un rendimiento suave de más de 100 FPS en los juegos más populares del mundo, requiere tarjeta gráfica discreta"
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
                "name": "Micro AMD RYZEN 7 7700X",
                "price": 1250000,
                "categories_id": 8,
                "brands_id": 6,
                "discount": 5,
                "description": "EL PROCESADOR DE JUEGOS EXCEPCIONAL, cuenta con 8 núcleos y 16 hilos de procesamiento, basados en la arquitectura AMD 'Zen 4'"
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
                "name": "Placa de video MSI GT 1030",
                "price": 58000,
                "categories_id": 9,
                "brands_id": 6,
                "discount": 0,
                "description": "Como cuenta con 384 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU"
            },
            {
                "name": "Placa de video Asus rtx 4080",
                "price": 480000,
                "categories_id": 9,
                "brands_id": 6,
                "discount": 0,
                "description": "Multiprocesadores NVIDIA Ada Lovelace Streaming: hasta 2 veces más rendimiento y eficiencia energética y Núcleos Tensor de 4ª generación: hasta 2 veces más rendimiento de IA"
            },
            {
                "name": "Placa de video Gigabyte rtx 4090",
                "price": 680000,
                "categories_id": 9,
                "brands_id": 6,
                "discount": 0,
                "description": "Integrado con interfaz de memoria GDDR6X de 384 bits de 24 GB. Sistema de refrigeración WINDFORCE, RGB Fusion, Dual BIOS. Placa trasera de metal de protección, soporte antihundimiento"
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
                "name": "Memoria Ram Corsair Vengance",
                "price": 40000,
                "categories_id": 11,
                "brands_id": 6,
                "discount": 5,
                "description": "La memoria DDR4 de alto rendimiento ilumina tu sistema con iluminación vívida y animada de diez LED RGB ultrabrillantes y direccionables individualmente por módulo"
            },
            {
                "name": "Memoria Ram Corsair Dominator Platinum RGB White 16GB (2X8GB) 3600 Mhz DDR4",
                "price": 68000,
                "categories_id": 11,
                "brands_id": 6,
                "discount": 0,
                "description": "La memoria DDR4 CORSAIR DOMINATOR PLATINUM RGB redefine las memorias premium DDR4, con un diseño superior en aluminio, chips de memoria de alta frecuencia estrictamente verificados y 12 LED RGB CAPELLIX de direccionamiento individual y gran intensidad"
            },
            {
                "name": "Memoria Ram HyperX Fury",
                "price": 25000,
                "categories_id": 11,
                "brands_id": 6,
                "discount": 0,
                "description": "Impresionante iluminación RGB con estilo agresivo y tecnología patentada de sincronización infrarroja [Kingston FURY]"
            },
            {
                "name": "MotherBoard Gigabyte B660M AORUS PRO DDR4 S1700",
                "price": 65500,
                "categories_id": 12,
                "brands_id": 5,
                "discount": 25,
                "description": "Las placas base de la serie B660 de GIGABYTE vienen con una solución de energía mejorada, los últimos estándares de almacenamiento y una conectividad excepcional para optimizar el rendimiento de los juegos."
            },
            {
                "name": "MotherBoard Asrock b550M",
                "price": 52000,
                "categories_id": 12,
                "brands_id": 3,
                "discount": 0,
                "description": "Compatible con procesadores AMD AM4 Ryzen de 3ª generación/Future AMD Ryzen. Soporta DDR4 4733+ (OC)"
            },
            {
                "name": "MotherBoard AM4 Msi B450",
                "price": 65000,
                "categories_id": 12,
                "brands_id": 3,
                "discount": 5,
                "description": "Admite AMD® Ryzen de 1ra y 2da generación / Ryzen ™ con Radeon ™ Vega Graphics / Athlon ™ con Radeon ™ Vega Graphics Processors para Socket AM4. Admite memoria DDR4-3466 (OC)"
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