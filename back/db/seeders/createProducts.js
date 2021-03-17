"use strict";
const faker = require("faker");
const { Products } = require("../../models/Index");

console.log("")
console.log("Comienza creación de productos")



Products.bulkCreate(
  [
    //Conectividad
  {
   name: "Cable de alimentacion USB a plug invertido",
   description: "Este cable tiene un conector USB tipo A en un extremo y en el otro un conector tipo plug invertido (5.4 mm)",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2020/01/USB-PLUG.jpg",
   price: 52,
   mark: "Samsung", 
   stock: 150,

  },
  {
   name: "Cable dupont hembra hembra 10 centimetros",
   description: "Realiza tus conexiones de forma más profesional, sin soldaduras, sin falsos contactos y sin desorden con este arnés de cable dupont hembra hembra . Los cables vienen en un arnés de cable plano (tipo listón) de 40 conductores, cada uno con su conector independiente. Puedes separarlos todos y utilizarlos de manera individual o crear tus arneses especiales de 2, 4, 8 o más conductores removiendo solamente unas piezas conforme se requieran.",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2018/04/cable_dupont_hembra_hembra_10_centimetros.jpg",
   price: 63,
   mark: "Nokia", 
   stock: 500,

  },
  {
   name: "Cable dupont hembra hembra 20 centimetros",
   description: "Realiza tus conexiones de forma más profesional, sin soldaduras, sin falsos contactos y sin desorden con este arnés de cable dupont hembra hembra . Los cables vienen en un arnés de cable plano (tipo listón) de 40 conductores, cada uno con su conector independiente. Puedes separarlos todos y utilizarlos de manera individual o crear tus arneses especiales de 2, 4, 8 o más conductores removiendo solamente unas piezas conforme se requieran.",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2013/06/cable-dupont-hembra-hembra.jpg",
   price: 72,
   mark: "Nokia", 
   stock: 300,

  },
  {
   name: "Cable dupont macho hembra 10 centimetros",
   description: "Realiza tus conexiones de forma más profesional, sin soldaduras, sin falsos contactos y sin desorden con este arnés de cable dupont macho hembra. Los cables vienen en un arnés de cable plano (tipo listón) de 40 conductores, cada uno con su conector independiente. Puedes separarlos todos y utilizarlos de manera individual o crear tus arneses especiales de 2, 4, 8 o más conductores removiendo solamente unas piezas conforme se requieran.",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2018/06/cable_dupont_macho_hembra_10_centimetros.jpg",
   price: 42,
   mark: "LG", 
   stock: 38,

  },
  {
   name: "Cable dupont macho hembra 20 centimetros",
   description: "Realiza tus conexiones de forma más profesional, sin soldaduras, sin falsos contactos y sin desorden con este arnés de cable dupont macho hembra. Los cables vienen en un arnés de cable plano (tipo listón) de 40 conductores, cada uno con su conector independiente. Puedes separarlos todos y utilizarlos de manera individual o crear tus arneses especiales de 2, 4, 8 o más conductores removiendo solamente unas piezas conforme se requieran.",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2014/08/cable-dupont-macho-hembra.jpg",
   price: 92,  
   mark: "Nokia",  
   stock: 22,

  },
  {
   name: "Cable dupont macho macho 10 centimetros",
   description: "Realiza tus conexiones de forma más profesional, sin soldaduras, sin falsos contactos y sin desorden con este arnés de cable dupont macho macho. Los cables vienen en un arnés de cable plano (tipo listón) de 40 conductores, cada uno con su conector independiente. Puedes separarlos todos y utilizarlos de manera individual o crear tus arneses especiales de 2, 4, 8 o más conductores removiendo solamente unas piezas conforme se requieran.",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2018/06/cable_dupont_macho_macho_10_centimetros.jpg",
   price: 68, 
   mark: "Samsung", 
   stock: 35,

  },
  {
   name: "Cable dupont macho macho 20 centimetros",
   description: "Realiza tus conexiones de forma más profesional, sin soldaduras, sin falsos contactos y sin desorden con este arnés de cable dupont macho macho. Los cables vienen en un arnés de cable plano (tipo listón) de 40 conductores, cada uno con su conector independiente. Puedes separarlos todos y utilizarlos de manera individual o crear tus arneses especiales de 2, 4, 8 o más conductores removiendo solamente unas piezas conforme se requieran.",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2013/06/cable-dupont-macho-macho.jpg",
   price: 25,  
   mark: "LG",  
   stock: 78,

  },
  {
   name: "Cable micro HDMI 1.5 metros",
   description: "Cable micro HDMI a HDMI macho a macho 150 cm excelente para transmitir señal de audio y video digital de alta definición y libre de ruido.   Para receptores de TV digital, Blue-Ray, DVD, Consolas de videojuegos, teatros en casa, etc. También funciona para las tarjetas de desarrollo y computadoras embebidas que se encuentran publicadas en nuestro catálogo de productos.",
   photo: "https://www.geekfactory.mx/wp-content/uploads/cable-micro-hdmi-1-5-metros.jpg",
   price: 58,
   mark: "LG",
   stock: 61,

  },
  {
   name: "Cable micro USB con switch para Raspberry Pi",
   description: "El cable micro USB con switch proporciona alimentación a cualquier tarjeta de desarrollo que disponga de un puerto micro USB (incluido en muchos celulares). El cable es ideal para utilizarse con la computadora Raspberry Pi, debido a que posee un switch que permite activar o desactivar la alimentación. Esto permite apagar la computadora Raspberry Pi sin la necesidad de desconectar algún extremo del cable. Hay que estacar que este cable NO sirve para llevar a cabo transmisiones de datos, por lo que no se pueden usar para descargar fotos de celulares, programar arduino, etc. Su propósito es solamente alimentar equipos con conector micro USB.",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2015/12/cable_micro_usb_con_switch_para_raspberry_pi.jpg",
   price: 78,
   mark: "Nokia", 
   stock: 56,

  },
  {
   name: "Cable USB para arduino tipo A – B",
   description: "Cable USB para arduino Uno con conectores USB estándar 2.0, incluye plug macho tipo “A” USB y plug tipo “B” R3, para conectar tu Micro controlador Arduino a tu computadora y establecer una comunicación ideal entre ambos dispositivos, de esta forma beneficiarás el funcionamiento de tu controlador y que tu proyecto sea desarrollado de la mejor manera.",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2017/03/CableUSBtipoA-B.png",
   price: 99,
   mark: "LG", 
   stock: 15,

  },
  {
   name: "Cable USB para arduino tipo A – micro B",
   description: "Cable tipo Micro Compatible con Arduino Leonardo y Due, Compatible Celulares, Aproximadamente 30 cm de largo",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2019/02/cableleonardo.jpg",
   price: 85,
   mark: "Samsung",
   stock: 50,

  },
  {
   name: "Cable USB para arduino tipo A – mini B",
   description: "Cable con conector USB tipo mini B de corta longitud, ideal para conectar tarjetas electrónicas de desarrollo a laptops. La longitud del cable puede variar entre distintos lotes, pero se mantiene entre los 15 y 30 centímetros. El conector tipo mini B se encuentra en tarjetas de desarrollo (como el arduino nano), cámaras digitales, reproductores de MP3, discos duros externos y otros periféricos USB.",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2018/10/Cable-USB-para-Arduino-NANO.jpg",
   price: 78,
   mark: "Nokia", 
   stock: 38,

  },
  {
   name: "Caja de alambres pre cortados para protoboard",
   description: "Caja de Alambres pre cortados para protoboard te proporciona todos los cables ya previamente cortados y listos para que los utilices en tu proyecto, evita perder el tiempo de pelar y cortar cada uno, así estarás listo para desarrollar tu circuito de la mejor manera y en mucho menos tiempo, no requerirás pinzas ni otros instrumentos. Cada caja contiene 140 alambres. 6 diversos colores: Rojo, blanco, azul, verde, anaranjado, y negro. Los alambres precortados, Pre-pelados y preformados simplifican y aceleran el trabajo de los   prototipos.Fácil de conectar y desconectar",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2016/11/caja-de-alambres-pre-cortados-para-protoboard.jpg",
   price: 100, 
   mark: "LG",
   stock: 20,
 
  },
  {
   name: "Convertidor USB a serial RS232",
   description:"El Cable Convertidor USB a Serial RS232, sirve como adaptador conertidor de un puerto USB a puerto serial RS232 DB9 para conectar, monitorear y controlar un dispositivo serial. Con soporte para tasas de transferencia de datos de hasta 921.6 Kbps, el cable USB a serial constituye una solución ideal para proporcionar conectividad serial a dispositivos como terminales de punto de venta, módems seriales, equipos industriales, así como una amplia gama de otros periféricos que manejen el estándar RS232. El conversor USB a RS232 es fácil de instalar y ofrece amplia compatibilidad con sistemas operativos, lo cual permite su fácil integración en entornos mixtos.",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2017/11/high-quality-usb-to-rs232-serial-db9-pin.jpg",
   price: 10,
   mark: "Samsung",  
   stock: 450,
  
  },
  {
   name: "Juego de cables con caimanes 10 piezas",
   description: "Juego De Caimanes Con Cable 10 Piezas",
   photo: "https://www.geekfactory.mx/wp-content/uploads/2018/10/Caimanes.jpg",
   price: 36,
   mark: "LG",  
   stock: 200,

  },
  
  
    //Pantallas y displays
  {
    name: "Display LCD de 0.96 pulgadas SPI ST7735S",
    description: "Módulo con display LCD de 0.96 pulgadas con interfaz SPI y controlador ST7735S para proyectos electrónicos que requieren una interfaz a color.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/display-lcd-de-0-96-pulgadas-spi-st7735s.jpg",
    price: 39,
    mark: "Samsung",
    stock: 33,

  },
  {
    name: "Pantalla Raspberry Pi tactil 7 pulgadas oficial",
    description: "Crea proyectos con interfaz gráfica de alto impacto gracias a la pantalla para Raspberry Pi oficial. Con una resolución de 800 x 480 y panel táctil multi touch.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/pantalla-tactil-7-pulgagas-para-raspberry-pi-oficial.jpg",
    price: 89,
    mark: "Nokia",  
    stock: 24,

  },
  {
    name: "Shield pantalla LCD tactil 3.2 pulgadas para mega Itead",
    description: "Arduino Shield Pantalla LCD 3.2 Pulgadas con tecnología touch es compatible con el Arduino Mega, tiene una gran variedad de colores, pantalla TFT táctil y entrada para tarjeta SD. Está basada en el módulo controlador SSD1289 con 8 bit de datos y 4 bit de interfaz de control.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2016/01/shield_pantalla_lcd_tactil_3_2_pulgadas_para_mega_itead.jpg",
    price: 79,
    mark: "Samsung",
    stock: 54,

  },
  {
    name: "Adaptador pantalla LCD 16×2 serial I2C PCF8574",
    description: "Conecta una pantalla I2C a tu arduino usando únicamente 2 pines digitales (SDA y SCL) Con el adaptador pantalla LCD 16×2 Serial I2C PCF8574.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2015/06/adaptador_pantalla_lcd_16x2_serial_i2c_pcf8574.jpg",
    price: 68,
    mark: "LG", 
    stock:  45,

  },
  {
    name: "Display LCD de 1.3 pulgadas SPI ST7789",
    description: "Módulo con display LCD de 1.3 pulgadas con interfaz SPI y controlador ST7789 para proyectos electrónicos que requieren una interfaz a color.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/display-lcd-de-1-3-pulgadas-spi-st7789.jpg",
    price: 88,
    mark: "Nokia", 
    stock: 39,

  },
  {
    name: "LCD Nextion 2.4 pulgadas NX3224T024",
    description: "La pantalla LCD Nextion 2.4 pulgadas NX3224T024 es un dispositivo de visualización inteligente ideal para desarrollar interfaces gráficas con Arduino.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2016/01/lcd_nextion_2_4_pulgadas.jpg",
    price: 62,
    mark: "Samsung",
    stock:  5,

  },
  
  
    //Motores, actuadores, servos y accesorios
  {
    name: "A4988 Driver para motor a pasos",
    description: "El Driver para motor a pasos A4988 resulta ideal para manejar motores bipolares de hasta 2 amperes por bobina utilizando un microcontrolador.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2015/10/a4988-driver-para-motores-a-pasos.jpg",
    price: 56,
    mark: "LG", 
    stock:  38,

  },
  {
    name: "Driver ULN2003APG para Motor a Pasos",
    description: "El Driver ULN2003APG para motor a pasos es un PCB de interface de potencia basado en el integrado ULN2003, fabricado con 5 líneas de salida para motores a pasos de 4 fases unipolares, es una excelente tarjeta electrónica de baja inversión y además muy sencilla de utilizar.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2016/04/ULN2003.png",
    price: 87,
    mark: "Samsung", 
    stock:  182,

  },
  {
    name: "Encoder para micro motorreductor metalico Gravity DFRobot",
    description: "El Encoder para micro motorreductor metálico es ideal para utilizarse con los motorreductores metálicos que vendemos (GeekMotor) y motorreductores metálicos de pololu.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2016/08/encoder_para_motor_3.jpg",
    price: 34,
    mark: "Nokia",  
    stock: 253,

  },
  {
    name: "MG90S Tower Pro micro servo motor metálico",
    description: "Servo motor tamaño micro MG90S Tower Pro. De gran torque y alta resistencia debido a sus engranajes metálicos, ideal para proyectos electrónicos y robótica.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2015/10/mg90s-tower-pro-micro-servo-motor-metalico.jpg",
    price: 87,
    mark: "Nokia", 
    stock: 123,

  },
  {
    name: "Micro motorreductor metalico 100 RPM",
    description: "Micro motorreductor metálico 100 RPM. Ideal para proyectos de robótica como robots seguidores de lineas, laberinto o sumo.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2016/04/micro-motorreductor-metalico.jpg",
    price: 94,
    mark: "Samsung",
    stock:  433,

  },
  {
    name: "Mini Bomba de Agua Sumergible 6V",
    description: "Mini Bomba de Agua Sumergible es perfecta para proyectos que requieran de un flujo de líquido, puede proveer un flujo de hasta 2 litros por minuto. Excelente para peceras, fuentes, cascadas, etc.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2017/07/Mini-Bomba-de-Agua.png",
    price: 32,
    mark: "Nokia", 
    stock: 55,

  },
  {
    name: "Motor a pasos NEMA 17 17HS440",
    description: "Motor a pasos NEMA 17 es ideal para proyectos de impresoras 3D y maquinaria CNC. Tiene un ángulo de paso de 1.8º (200 pasos por vuelta) y corriente de 1.7A.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2016/11/motor-a-pasos-nema-17-17hs4401.jpg",
    price: 66,
    mark: "Nokia", 
    stock: 321,

  },
  {
    name: "Motor Nema 17 HS1538",
    description: "El Motor Nema 17 HS1538 es ideal para robótica, automatización, modelismo o cualquier otra aplicación que requiera un motor a pasos confiable y potente. Sus características lo hacen muy versátil y su precio lo convierte en una de las mejores opciones para cualquier proyecto o hobby.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2018/08/N17.jpg",
    price: 58,
    mark: "Nokia",
    stock:  265,

  },
  {
    name: "Servomotor Futaba S3003",
    description: "El Servomotor Futaba S3003 es excelente para el desarrollo de aplicaciones en el área de robótica, pueden ser utilizados como motor de corriente continua para dar giro a una llanta o como torque para darle movimiento a una articulación del algún brazo manipulador, robot arácnido, hexápodo, etc.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2016/06/motoreductor_futaba_s3003_1.jpg",
    price: 58,
    mark: "LG",  
    stock:  235,

  },
  {
    name: "Set de Helices para Dron",
    description: "Adquiere el Set de 4 Hélices especiales para prototipo de vehículo aéreo no tripulado, y qué no te falte ningún componente para desarrollar tu proyecto.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2017/03/Helices_drone.png",
    price: 57,
    mark: "Samsung", 
    stock: 103,

  },
  {
    name: "Shield MotoMama L298N puente H Itead",
    description:"El shield MotoMama L298N puente H Itead es conveniente para manejar motores y comunicaciones inalámbricas usando módulos compatibles con Xbee.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2014/06/shield_motomama_l298n_puente_h_itead.jpg",
    price: 87,
    mark: "Nokia", 
    stock: 302,

  },
  {
    name: "Valvula solenoide 1/2 pulgada electrovalvula 12 volts",
    description: "Válvula solenoide 1/2 pulgada o electroválvula con bobina de 12 volts. Operación normalmente cerrada para agua o fluidos de baja viscosidad.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/valvula-solenoide-1-2-pulgada-electrovalvula-12-volts.jpg",
    price: 55,
    mark: "LG", 
    stock: 56,

  },
  {
    name: "TB6600 Controlador de motor a pasos",
    description: "TB6600 Controlador de motor a pasos con micro-stepping. Es Ideal para tus proyectos de máquinas CNC e impresoras 3D de tamaño medio.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2016/07/TB6600_Controlador_de_Motor_a_Pasos_2.jpg",
    price: 66,
    mark: "Samsung",  
    stock: 187,

  },
  {
    name: "Motoreductor Amarillo tipo L",
    description: "Motoreductor Amarillo tipo L, ideal para tus proyectos de robótica móvil como Seguidores de Línea, Carros laberinto, Mini sumos e incluso algunas grúas pequeñas.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2017/07/1-eje-moto.jpg",
    price: 87,
    mark: "Nokia", 
    stock:  224,

  },
  {
    name: "Motor Brushless (sin escobillas) A2212/6T 2200KV",
    description: "El Motor Brushless (sin escobillas) A2212/6T 2200KV es un motor de conmutación electrónica, funciona con Corriente Continua y es una excelente opción para desarrollo de prototipos de Dron y algunos otros dispositivos de Radio control, gracias a su eficiencia y bajo peso, para que desarrolles tus proyectos de la mejor manera.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2017/04/Motor-Brushless-sin-escobillas2.png",
    price: 39,
    mark: "Nokia",  
    stock:  58,

  },
  
  
    //Cursos
  {
    name: "Motor a pasos tutorial introductorio",
    description: "El motor a pasos es un dispositivo que ha estado con nosotros un largo tiempo. Seguramente si desarmas una impresora o escáner con algunos años de antiguedad, vas a encontrarte cuando menos un par de estos dispositivos, pero: ¿Como funcionan? ¿Como los podemos gobernar? ¿Por que se han utilizado tanto en la electrónica de consumo?",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2017/08/motor_a_pasos-1080x675.jpg",
    price: 99,
    mark: "Curso",
    stock: 20,

  },
  {
    name: "Pantalla alfanumerica LCD 16X2 con Arduino",
    description: "En este tutorial enseñaremos a utilizar la pantalla LCD 16X2 con Arduino. Abordaremos lo más básico: desde la conexión de la pantalla con el arduino, mostrar cadenas de texto, enviar la lectura de un sensor a la pantalla y finalmente llegaremos a generar caracteres personalizados en la pantalla para hacer aún más vistosos nuestros proyectos.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2017/10/lcd_16x2_con_arduino_1-700x573.jpg",
    price: 99,
    mark: "Curso",
    stock: 20,

  },
  {
    name: "DS18B20 con Arduino: tutorial de sensor de temperatura digital",
    description: "El DS18B20 es un sensor de temperatura en el cual se lleva la conversión analógico a digital dentro del encapsulado, facilitando el resultado de dicha conversión a través de una interfaz digital llamada 1-wire. El sensor de temperatura DS18B20 se puede encontrar en diversas formas. En esta entrada estudiamos el proceso de comunicación con dispositivos 1-wire utilizando como ejemplo el DS18B20.",
    photo: "https://www.geekfactory.mx/wp-content/uploads/2019/06/conexion-arduino-con-ds18b20-1024x865.jpg",
    price: 99,
    mark: "Curso",
    stock: 20,

  },
    
    //Sensores
{
  name: "AD8232 Módulo ECG monitor de pulso cardiaco",
  description: "Este módulo basado en el circuito ACS712 de Allegro MicroSystems permite medir la cantidad de corriente a través de un circuito hasta 20 Amperes.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2013/06/acs712_modulo_sensor_de_corriente_20_a.jpg",
  price: 85,
  mark: "Samsung",
  stock: 322,

},
{
  name: "ADXL335 Acelerometro analogico 3 ejes",
  description: "El ADXL335 es un acelerómetro de salida analógica con rango de +/- 3G y salidas acondicionadas. Está montado en un módulo que facilita su conexión.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2017/12/adxl335_acelerometro_analogico_3_ejes.jpg",
  price: 82, 
  mark: "Samsung",
  stock: 22,

},
{
  name: "CNY70 Sensor optico de reflexion",
  description: "El sensor CNY70 esta compuesto de un diodo emisor de infrarrojo y un fototransistor. Permite la detección de objetos a corta distancia.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2016/02/cny70-sensor-optico-de-reflexion.jpg",
  price: 29, 
  mark: "LG",
  stock:  458,

},
{
  name: "Camara OV7670",
  description: "El módulo con cámara OV7670 es ideal para experimentar con sensores de imágen. Es capaz de generar 30 cuadros por segundo con resolución de 640×480 pixeles.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2015/12/camara-ov7670.jpg",
  price: 98,
  mark: "Samsung",
  stock: 387,

},
{
  name: "FS400A caudalimetro sensor de flujo 1 pulgada",
  description: "El sensor de flujo FS400A cuenta con salida digital a frecuencia. Está basado en un sensor de efecto hall por lo que es muy confiable.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2018/07/fs400a-caudalimetro-sensor-de-flujo-1-pulgada.jpg",
  price: 75,
  mark: "Samsung",
  stock: 241,

},
{
  name: "BMP085 Sensor de Presión Atmosferica",
  description: "Sensor de presión atmosférica BMP085. Ideal en aplicaciones de meteorología y también para usarse como altímetro. Cuenta con interfaz I2C para comunicarse con el procesador.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2013/06/BMP085.jpg",
  price: 96,
  mark: "Nokia",  
  stock: 87,

},
{
  name: "GP2Y0A02YK0F Sensor de proximidad infrarrojo sharp",
  description: "El GP2Y0A02YK0F Sensor de proximidad infrarrojo sharp es un dispositivo optoelectrónico que permite medir distancia mediante la reflexión de luz infrarroja",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2013/12/GP2Y0A02YK0F-sensor-de-proximidad-infrarrojo-sharp.jpg",
  price: 84,
  mark: "LG",
  stock: 365,

},
{
  name: "DS18B20 Sensor de temperatura sumergible",
  description: "DS18B20 Sensor de temperatura sumergible que cuenta con un encapsulado metálico y cable impermeable que permiten su utilización bajo el agua.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2013/06/ds18b20-sensor-de-temperatura-sumergible.jpg",
  price: 54, 
  mark: "Samsung",
  stock: 56,

},
{
  name: "IMU 10 grados unidad de medicion inercial",
  description: "Unidad de Medición Inercial (IMU) de 10 grados de libertad. Se compone de varios dispositivos electrónicos soldados en una mísma placa de circuito impreso. Este IMU dispone de 1 acelerómetro de 3 ejes, un giroscopio de 3 ejes y un magnetómetro de 3 ejes.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2013/06/IMU-10-Grados-Unidad-de-Medici%C3%B3n-Inercial_5.jpg",
  price: 42,
  mark: "Samsung",  
  stock: 254,

},
{
  name: "Electronic brick sensor de humedad de suelo Itead",
  description: "Este producto es un electronic brick sensor de humedad de suelo. Al conectarlo a un microcontrolador podemos detectar si hay humedad en el sustrato.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2019/03/ElectronicbricksensordehumedaddesueloItead.jpg",
  price: 86,
  mark: "Nokia",
  stock: 128,

},
{
  name: "Microfono electret",
  description: "El Mini Micrófono Electret es excelente por su bajo costo, fácil manipulación y por su gran cantidad de aplicaciones tanto para módulos de voz como para grabación de audio.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2017/12/electret.jpg",
  price: 58,
  mark: "LG", 
  stock: 253,

},
{
  name: "SCT-013 Sensor de corriente alterna no invasivo 100 A",
  description: "El SCT-013 Sensor de corriente alterna no invasivo, permite conocer la magnitud de corriente alterna que circula en un conductor. Ideal para proyectos de monitoreo de consumo de energía.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2016/09/Sensor-Corriente-Alterna.png",
  price: 89,
  mark: "Samsung",  
  stock: 425,

},
{
  name: "MQ-3 Sensor de alcohol",
  description: "El MQ-3 es un sensor de alcohol, perfecto para detectar la concentración de alcohol en el ambiente o para detectar alcohol en el aliento de una persona, justo como lo haría un alcoholimetro. El MQ-3 posee una gran sensibilidad y tiempo de respuesta.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2015/12/sensor_alcohol_MQ3_3.jpg",
  price: 87,
  mark: "Nokia", 
  stock: 365,

},
{
  name: "Sensor de Proximidad Inductivo NPN LJ12A3-4-Z/BX",
  description: "El sensor de proximidad inductivo NPN LJ12A3-4-Z/BX es ideal para el uso industrial y se puede usar para reemplazar switches de fin de carrera, detectar el posicionamiento de partes metálicas o realizar el conteo de piezas, todo ello sin que exista contacto entre las partes.",
  photo: "https://www.geekfactory.mx/wp-content/uploads/2016/04/Sensor_de_Proximidad_Inductivo_NPN-LJ12A3-4-ZBX_1.jpg",
  price: 44,
  mark: "Nokia", 
  stock: 89,

},

  ]
  
).then(() => {
  console.log("");
  console.log("Todos los productos  creados ");
}); 





/*
 for (let i = 0; i < 50; i++) {
  let numero = Math.floor(Math.random() * 3);
  const fabricantes = ["Samsung", "LG", "Hitachi"];
  let fabricante = fabricantes[numero];
  let cantidad = Math.floor(Math.random() * 50) + 1;
  let nombreProduct=faker.commerce.productName();
  if(nombreProduct.length<2) {nombreProduct="no le llegó el valor"};
  let descProduct=faker.commerce.productDescription();
  console.log(nombreProduct);
  let precioProducto=faker.commerce.price();
  
   Products.bulkCreate([
    {
      name: nombreProduct,
      description: descProduct,
      photo:
        "https://www.geekfactory.mx/wp-content/uploads/ad8232-modulo-ecg-monitor-de-pulso-cardiaco.jpg",
      price: precioProducto,
      mark: fabricante,
      stock: cantidad,
    },
  ]).then(() => {
    console.log("productos creados ", i);
  });
}  */






