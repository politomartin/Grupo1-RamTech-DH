'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('products', [
            {
                "name": "Controles JoyCon",
                "price": 33000,
                "categories_id": 14,
                "brands_id": 14,
                "discount": 15,
                "description": "Un control o dos, control en vertical o en horizontal, acoplados a la consola o separados. Dependiendo del juego podrás jugar de múltiples maneras"
            },
            {
                "name": "Joystick PS5",
                "price": 28000,
                "categories_id": 14,
                "brands_id": 15,
                "discount": 5,
                "description": "Este excelente Joystick de PS5 cuenta con una buena respuesta táctil, con micrófono integrado y conector de auriculares"
            },
            {
                "name": "Joystick XBOX",
                "price": 22000,
                "categories_id": 14,
                "brands_id": 15,
                "discount": 0,
                "description": "Experimenta el diseño modernizado del control inalámbrico Xbox en negro, con superficies moldeadas y geometría refinada para mayor comodidad y control sin esfuerzo durante el juego, con un rendimiento de la batería de hasta 40 horas"
            },
            {
                "name": "Mouse Razer Viper",
                "price": 15000,
                "categories_id": 8,
                "brands_id": 1,
                "discount": 5,
                "description": "Olvídate de lo convencional y consigue la ventaja injusta con el Razer Viper: un mouse inalámbrico para juegos creado para ganar. Diseñado para ser una auténtica extensión del jugador, este depredador letal viene equipado con nuestra más alta tecnología, listo para clavar sus colmillos en la competencia"
            },
            {
                "name": "Mouse HyperX Pulsefire",
                "price": 36000,
                "categories_id": 8,
                "brands_id": 10,
                "discount": 5,
                "description": "Hasta 100 horas de duración de la batería: el Pulsefire Wireless obtiene hasta 100 horas de duración de la batería con una carga completa, por lo que pasarás más tiempo acumulando victorias y menos tiempo cargando al lado"
            },
            {
                "name": "Mouse Logitech GPRO",
                "price": 60000,
                "categories_id": 8,
                "brands_id": 9,
                "discount": 5,
                "description": "Fabricado con y para jugadores profesionales: diseñado durante dos años con entrada directa de muchos jugadores profesionales de deportes electrónicos, el mouse Pro Wireless para juegos está diseñado para un rendimiento extremo"
            },
            {
                "name": "Gabinete Corsair Icue 5000T",
                "price": 130000,
                "categories_id": 6,
                "brands_id": 2,
                "discount": 20,
                "description": "Gabinete Corsair Icue 5000T RGB TG MID-T BLACK"
            },
            {
                "name": "Gabinete Mid Tower Solarmax 5901",
                "price": 29000,
                "categories_id": 6,
                "brands_id": 15,
                "discount": 0,
                "description": "Gabinete Mid Tower con lateral y frente de vidrio templado ultra transparente que permite visualizar y disfrutar del interior de tu equipo con una experiencia maravillosa"
            },
            {
                "name": "Gabinete Mid Tower Aerocool Mirage Negro",
                "price": 38999,
                "categories_id": 6,
                "brands_id": 15,
                "discount": 0,
                "description": "Los ventiladores RGB direccionables se pueden controlar mediante una de dos formas: botón de control LED RGB o placa base RGB direccionable. Incluye un concentrador de control ARGB de 6 puertos para conectar y controlar sus ventiladores ARGB. DISEÑO INFINITY MIRROR ARGB"
            },
            {
                "name": "Gabinete Mid Tower Corsair 220T Rgb Vidrio Templado Negro",
                "price": 70000,
                "categories_id": 6,
                "brands_id": 2,
                "discount": 15,
                "description": "Disfruta de una PC bonita y estética gracias a este Gabinete Corsair 220T"
            },
            {
                "name": "Monitor Samsung Curvo T55",
                "price": 115000,
                "categories_id": 7,
                "brands_id": 13,
                "discount": 0,
                "description": "Monitor Gamer Curvo Samsung T55 C32t550 Led 32 Full Hd Hdmi. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento."
            },
            {
                "name": "Monitor LG UltraGear 144hz",
                "price": 155000,
                "categories_id": 7,
                "brands_id": 11,
                "discount": 0,
                "description": "LG busca entender a los usuarios para ofrecerles óptimas soluciones y nuevas experiencias a través de la evolución tecnológica. Disfrutá de la perfecta combinación de diseño, calidad y rendimiento que la empresa te ofrece en este monitor"
            },
            {
                "name": "Monitor Gamer 24 Asus Full Hd 165Hz",
                "price": 144000,
                "categories_id": 7,
                "brands_id": 6,
                "discount": 0,
                "description": "Pantalla Full HD de 24 pulgadas (1920 x 1080) con una frecuencia de actualización rápida de 165 Hz overclockable (soporta 144 Hz) y tiempo de respuesta de 0,5 ms (GTG). La tecnología NVIDIA G-SYNC elimina el tartamudeo y el desgarro de la pantalla para una experiencia de juego más suave"
            },
            {
                "name": "Teclado Redragon Kuruma",
                "price": 14500,
                "categories_id": 9,
                "brands_id": 3,
                "discount": 5,
                "description": "Teclado Gamer Redragon Kumara K552 Rainbow Outemu Red Esp"
            },
            {
                "name": "Teclado HyperX Alloy Origins Core",
                "price": 70000,
                "categories_id": 9,
                "brands_id": 10,
                "discount": 10,
                "description": "Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel"
            },
            {
                "name": "Teclado Razer Huntsman",
                "price": 81000,
                "categories_id": 9,
                "brands_id": 1,
                "discount": 5,
                "description": "Entra en una nueva dimensión letal con el Razer Huntsman Mini: un teclado para juegos reducido al 60 % de su tamaño y con sus punteros switches ópticos Razer. Portátil e ideal para escritorios reducidos, es hora de experimentar un accionamiento a la velocidad de la luz con nuestro diseño más compacto hasta la fecha"
            },
            {
                "name": "Micrófono Razer Seiren Mini",
                "price": 28300,
                "categories_id": 11,
                "brands_id": 1,
                "discount": 0,
                "description": "Recomendado para streaming, grabaciones, transmisión, videollamadas, voces."
            },
            {
                "name": "Micrófono Blue Condenser",
                "price": 55000,
                "categories_id": 11,
                "brands_id": 15,
                "discount": 0,
                "description": "La comunicación clara y poderosa es importante para todas las organizaciones. Los micrófonos de Blue te permiten capturar y transmitir con una calidad de sonido sorprendente. Blue combina audio de calidad profesional con la simplicidad plug-and-play para ofrecer un rendimiento que está a años luz de los micrófonos integrados para portátiles y cámaras"
            },
            {
                "name": "Micrófono Redragon BLAZAR GM300",
                "price": 28000,
                "categories_id": 11,
                "brands_id": 3,
                "discount": 0,
                "description": "Al ser condensador, posibilitará un resultado claro y fino. Es ideal para percusiones, guitarras, pianos, entre otros. Por su respuesta tan definida ante la voz, es el más elegido por los profesionales"
            },
            {
                "name": "Auriculares Redragon Zeus",
                "price": 16200,
                "categories_id": 10,
                "brands_id": 3,
                "discount": 10,
                "description": "Con retroiluminación RGB, un micrófono excepcional, construcción cómoda y una calidad de sonido arrolladora."
            },
            {
                "name": "Auricular Gamer Logitech G733 Lightspeed Rgb Inalámbrico Violeta",
                "price": 60000,
                "categories_id": 10,
                "brands_id": 9,
                "discount": 0,
                "description": "Audífonos inalámbricos con micrófono para juegos diseñados para desempeño y confort. Equipados con todo el sonido envolvente, los filtros de voz y la iluminación avanzada que necesitas para lucir, sonar y jugar con más estilo que nunca."
            },
            {
                "name": "Auricular Gamer Redragon Icon H520",
                "price": 27500,
                "categories_id": 10,
                "brands_id": 6,
                "discount": 0,
                "description": "Los Icon son auriculares estéreo de altísima calidaddotados de un potente sistema 7.1 virtual que expanderadicalmente la espacialidad del sonido, creando unaatmósfera inmersiva de 360º. Son perfectos para elgaming en todas sus facetas, pero se destacanespecialmente en los FPS, donde la espacialidadsonora aumentada se transforma en una verdaderaventaja competitiva."
            },
            {
                "name": "Auricular Gamer HyperX Cloud Blue Ps5 Ps4 Negro y Azul",
                "price": 34000,
                "categories_id": 10,
                "brands_id": 10,
                "discount": 0,
                "description": "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX Cloud Alpha S no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores."
            },
            {
                "name": "Micro AMD RYZEN 3 4100 | 4 núcleos y 8 hilos",
                "price": 35700,
                "categories_id": 1,
                "brands_id": 4,
                "discount": 0,
                "description": "Puede ofrecer un rendimiento suave de más de 100 FPS en los juegos más populares del mundo, requiere tarjeta gráfica discreta"
            },
            {
                "name": "Micro AMD RYZEN 5 4500 S/VIDEO BOX AM4",
                "price": 43700,
                "categories_id": 1,
                "brands_id": 4,
                "discount": 0,
                "description": "Línea de productos AMD Ryzen™ 5 Desktop Processors."
            },
            {
                "name": "Micro AMD RYZEN 7 7700X",
                "price": 1250000,
                "categories_id": 1,
                "brands_id": 4,
                "discount": 5,
                "description": "EL PROCESADOR DE JUEGOS EXCEPCIONAL, cuenta con 8 núcleos y 16 hilos de procesamiento, basados en la arquitectura AMD 'Zen 4'"
            },
            {
                "name": "Placa de video Nvidia AorusElite",
                "price": 290000,
                "categories_id": 2,
                "brands_id": 5,
                "discount": 0,
                "description": "Placa De Video Nvidia Gigabyte Geforce Rtx 3060 E-12gd12gb"
            },
            {
                "name": "Placa de video MSI GT 1030",
                "price": 58000,
                "categories_id": 2,
                "brands_id": 5,
                "discount": 0,
                "description": "Como cuenta con 384 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU"
            },
            {
                "name": "Placa de video Asus rtx 4080",
                "price": 480000,
                "categories_id": 2,
                "brands_id": 6,
                "discount": 0,
                "description": "Multiprocesadores NVIDIA Ada Lovelace Streaming: hasta 2 veces más rendimiento y eficiencia energética y Núcleos Tensor de 4ª generación: hasta 2 veces más rendimiento de IA"
            },
            {
                "name": "Placa de video Gigabyte rtx 4090",
                "price": 680000,
                "categories_id": 2,
                "brands_id": 15,
                "discount": 0,
                "description": "Integrado con interfaz de memoria GDDR6X de 384 bits de 24 GB. Sistema de refrigeración WINDFORCE, RGB Fusion, Dual BIOS. Placa trasera de metal de protección, soporte antihundimiento"
            },
            {
                "name": "Disco HDD Barracuda 1TB",
                "price": 25000,
                "categories_id": 3,
                "brands_id": 15,
                "discount": 0,
                "description": "Elige una gran capacidad de almacenamiento con el disco duro Seagate Barracuda 1 TB. Esta gama domina el mercado ofreciendo las mejores capacidades para ordenadores de sobremesa y los periféricos móviles. Estos discos son idóneos para las mejoras y se adaptan a todos los presupuestos."
            },
            {
                "name": "Disco SSD Kingston 480GB",
                "price": 14000,
                "categories_id": 3,
                "brands_id": 7,
                "discount": 0,
                "description": "La unidad A400 de estado sólido de Kingston ofrece enormes mejoras en la velocidad de respuesta, sin actualizaciones adicionales del hardware. Brinda lapsos de arranque, carga y de transferencia de archivos increíblemente más breves en comparación con las unidades de disco duro mecánico. Apoyada en su controlador de la más reciente generación, que ofrece velocidades de lectura y escritura de hasta 500 MB/s y 450 MB/s1, respectivamente, esta unidad SSD es 10 veces más rápida que los discos duros tradicionales y provee un mejor rendimiento, velocidad de respuesta ultrarrápida en el procesamiento multitareas y una aceleración general del sistema. Además son más fiables y duraderas que las unidades de disco duro, y están disponibles en varias capacidades que van de 120 GB hasta 960 GB2."
            },
            {
                "name": "Disco HDD WD Blue 2TB",
                "price": 50000,
                "categories_id": 3,
                "brands_id": 15,
                "discount": 10,
                "description": "Amplíe la capacidad de almacenamiento de su ordenador con los discos WD Blue, diseñados especialmente para ordenadores de sobremesa y todo en uno con diversas capacidades de almacenamiento."
            },
            {
                "name": "Memoria Ram Corsair Vengance",
                "price": 40000,
                "categories_id": 4,
                "brands_id": 2,
                "discount": 5,
                "description": "La memoria DDR4 de alto rendimiento ilumina tu sistema con iluminación vívida y animada de diez LED RGB ultrabrillantes y direccionables individualmente por módulo"
            },
            {
                "name": "Memoria Ram Corsair Dominator Platinum RGB White 16GB (2X8GB) 3600 Mhz DDR4",
                "price": 68000,
                "categories_id": 4,
                "brands_id": 2,
                "discount": 0,
                "description": "La memoria DDR4 CORSAIR DOMINATOR PLATINUM RGB redefine las memorias premium DDR4, con un diseño superior en aluminio, chips de memoria de alta frecuencia estrictamente verificados y 12 LED RGB CAPELLIX de direccionamiento individual y gran intensidad"
            },
            {
                "name": "Memoria Ram HyperX Fury",
                "price": 25000,
                "categories_id": 4,
                "brands_id": 10,
                "discount": 0,
                "description": "Impresionante iluminación RGB con estilo agresivo y tecnología patentada de sincronización infrarroja [Kingston FURY]"
            },
            {
                "name": "MotherBoard Gigabyte B660M AORUS PRO DDR4 S1700",
                "price": 65500,
                "categories_id": 5,
                "brands_id": 15,
                "discount": 25,
                "description": "Las placas base de la serie B660 de GIGABYTE vienen con una solución de energía mejorada, los últimos estándares de almacenamiento y una conectividad excepcional para optimizar el rendimiento de los juegos."
            },
            {
                "name": "MotherBoard Asrock b550M",
                "price": 52000,
                "categories_id": 5,
                "brands_id": 15,
                "discount": 0,
                "description": "Compatible con procesadores AMD AM4 Ryzen de 3ª generación/Future AMD Ryzen. Soporta DDR4 4733+ (OC)"
            },
            {
                "name": "MotherBoard AM4 Msi B450",
                "price": 65000,
                "categories_id": 5,
                "brands_id": 15,
                "discount": 5,
                "description": "Admite AMD® Ryzen de 1ra y 2da generación / Ryzen ™ con Radeon ™ Vega Graphics / Athlon ™ con Radeon ™ Vega Graphics Processors para Socket AM4. Admite memoria DDR4-3466 (OC)"
            },
            {
                "name": "Monitor Samsung F24T35 led 24",
                "price": 85200,
                "categories_id": 7,
                "brands_id": 13,
                "discount": 20,
                "description":"Una experiencia visual de calidad. Este monitor de 24 te va a resultar cómodo e incondicional, debido a su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos."
            },
            {
                "name": "Monitor Samsung Odyssey G4 S27BG40 LCD 27",
                "price": 190000,
                "categories_id": 7,
                "brands_id": 13,
                "discount": 25,
                "description": "Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento. Un monitor a tu medida: Gracias a su pantalla LCD vas a obtener gráficas con gran nitidez, colores vivos y atractivos."
            },
            {
                "name": "Monitor Asus VP228HE led 21.5 negro 100V/240V",
                "price": 70000,
                "categories_id": 7,
                "brands_id": 6,
                "discount": 5,
                "description": "Monitor Full HD de 21,5” (54,6 cm) con 1 ms de tiempo de respuesta para eliminar las imágenes borrosas y ofrecer una acción totalmente fluida. ASUS GamePlus incluye las funciones punto de mira y temporizador para una experiencia gaming mejorada. Tecnologías Antiparpadeo y Filtro de Luz Azul con certificación TÜV Rheinland.Amplias opciones de conectividad: HDMI, D-Sub y altavoces estéreo de 1,5 W."
            },
            {
                "name": "Monitor LG 32MN500M led 31.5 negro 100V/240V",
                "price": 140000,
                "categories_id": 7,
                "brands_id": 11,
                "discount": 10,
                "description": "La tecnología IPS destaca el rendimiento de las pantallas de cristal líquido. Los tiempos de respuesta se acortan, se mejora la reproducción del color y los usuarios pueden ver la pantalla prácticamente desde cualquier ángulo. Flicker Safe reduce el nivel de parpadeo en pantalla a casi cero, lo que ayuda a proteger sus ojos. Los usuarios pueden trabajar cómodamente durante todo el día." 
            },
            {
                "name": "Monitor Led Noblex Mk27x7100 27 Full Hd Vga Hdmi 75hz",
                "price": 90000,
                "categories_id": 7,
                "brands_id": 8,
                "discount": 0,
                "description": "Diseño Elegante e Inmersivo. Mejora tu experiencia de uso con un diseño estético y prácticamente sin bordes. Esta pantalla optimizada incorpora un bisel delgado en los tres lados para disfrutar de una experiencia visual inmersiva y evitar distraerte de una imagen realista y perfectamente precisa."
            },
            {
                "name": "Micrófono Razer Elite Condensador Cardioide",
                "price": 86000,
                "categories_id": 11,
                "brands_id": 1,
                "discount": 10,
                "description": "Fiel reflejo de la realidad. Con este producto lograrás que la reproducción obtenida sea lo más parecida a la original. Excelente para grabar voces debido a su sensibilidad y amplio rango de frecuencia. Un formato a tu medida: Al ser condensador, posibilitará un resultado claro y fino. Es ideal para percusiones, guitarras, pianos, entre otros. Por su respuesta tan definida ante la voz, es el más elegido por los profesionales. Recomendado para streaming, grabaciones, transmisión, videollamadas, voces."
            },
            {
                "name": "Micrófono HyperX SoloCast Condensador Cardioide",
                "price": 57000,
                "categories_id": 11,
                "brands_id": 10,
                "discount": 5,
                "description": "Con el micrófono HyperX descubrirás una nueva forma de captar y emitir audios. Fiel reflejo de la realidad: Ideal para varias actividades. Te brindará un sonido de calidad y conseguirás la nitidez de las voces. Un formato a tu medida: Al ser condensador, posibilitará un resultado claro y fino. Es ideal para percusiones, guitarras, pianos, entre otros. Por su respuesta tan definida ante la voz, es el más elegido por los profesionales. Diseño eficaz: Su patrón polar cardioide ofrece una mayor sensibilidad hacia los sonidos frontales, y así evita los ruidos provenientes de la parte posterior."
            },
            {
                "name": "Cámara Webcam Redragon Hitman Full Hd 1080p Usb Streaming",
                "price": 21000,
                "categories_id": 12,
                "brands_id": 3,
                "discount": 0,
                "description": "Control Automático: Saturación, contraste, agudeza, balance de blancos, exposición - Compatibilidad: Win XP(SP2 ,SP3) , VISTA , Win 7 , 8 , 10 , Linux o Mac OS con driver UVC - Tamaño del lente: 1/2.7 - Píxeles efectivos: 1920 x 1080 - Formato de datos: MJPEG/YUY2 - Ángulo de visión del lente: D=72° - Longitud Óptica: 7.8mm±0.1 - Sistema de enfoque: fixed focus - Rango de enfoque: 50 cm-infinito - Cuadros por segundo: 1080P 30fps Max"
            },
            {
                "name": "Cámara Webcam Logitech Brio 4K 90FPS",
                "price": 68000,
                "categories_id": 12,
                "brands_id": 9,
                "discount": 10,
                "description": "Logitech es una empresa suiza con alcance internacional que diseña productos y experiencias para acompañar las actividades cotidianas de las personas que la eligen. Cuando crear tecnología, se enfoca en la manera como sus clientes se conectan e interactúan con el mundo digital. Es por ello que esta cámara puede ser de gran utilidad en tu día a día.Cámara gamer: Este dispositivo es ideal para aquellas personas que disfrutan de los juegos en línea. Sus funcionalidades y la calidad de imagen, sin dudas, ofrecen una gran experiencia." 
            },
            {
                "name": "Cámara Webcam Logitech C930e Full HD 30FPS",
                "price": 45000,
                "categories_id": 12,
                "brands_id": 9,
                "discount": 0,
                "description": "Tener una videoconferencia es más sencillo que nunca. Su tecnología plug and play permite conectar la cámara a la computadora sin tener que configurar ni ofrecer parámetros a sus controladores. Cámara gamer: Este dispositivo es ideal para aquellas personas que disfrutan de los juegos en línea. Sus funcionalidades y la calidad de imagen, sin dudas, ofrecen una gran experiencia."
            },
            {
                "name": "Cámara Webcam Razer Kiyo PRO Full HD 60FPS",
                "price": 78000,
                "categories_id": 12,
                "brands_id": 1,
                "discount": 10,
                "description": "Funcionalidad: Esta cámara web ofrece micrófono incorporado, lo que permite capturar el sonido del ambiente. Podrás disfrutar de conversaciones con altavoz o con auriculares, si buscás mayor privacidad. Cámara gamer: Este dispositivo es ideal para aquellas personas que disfrutan de los juegos en línea. Sus funcionalidades y la calidad de imagen, sin dudas, ofrecen una gran experiencia."
            },
            {
                "name": "Barra De Sonido Redragon Gs570 Darknets Led Rgb Bt Aux Full",
                "price": 17000,
                "categories_id": 13,
                "brands_id": 3,
                "discount": 0,
                "description": "Redragon Darknets GS570 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia."
            },
            {
                "name": "Parlantes Xinua Tb Gamer Luz Rgb Bluetooth",
                "price": 15000,
                "categories_id": 13,
                "brands_id": 15,
                "discount": 5,
                "description": "Parlante Xinua para computadora de gama completa con luz RGB. Conexión mediante Bluetooth o cable auxiliar jack 3.5mm. Posee la particularidad de poder conectarse inalámbricamente con otros dispositivos compatibles tales como celulares, tablets, o computadoras."
            },
            {
                "name": "Parlantes HP DHE-6001",
                "price": 12000,
                "categories_id": 13,
                "brands_id": 15,
                "discount": 0,
                "description": "HP DHE-6001 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia."
            },
            {
                "name": "Barra De Sonido Hp Multimedia Dhe-6002",
                "price": 28000,
                "categories_id": 13,
                "brands_id": 15,
                "discount": 5,
                "description": "Barra De Sonido HP Multimedia Speaker DHE-6002 Con Luces Led. Sonido nítido y potente para tu escritorio, tecnología de primer nivel para gaming."
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