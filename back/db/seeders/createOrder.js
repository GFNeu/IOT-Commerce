const faker = require("faker"); 
const { Order } = require("../../models/Index");
const cantidad = 20

faker.locale="es";


for (let i = 0; i < cantidad; i++) {
     
  let usuario = parseInt (Math.floor(Math.random() * 50) + 1);
  let idOrderStatus =  parseInt( Math.floor(Math.random() * 6)+1);  
  let cale=faker.address.streetName();
  let num = parseInt (Math.floor(Math.random() * 5000) + 1);
  let pi = parseInt (Math.floor(Math.random() * 21) + 1);
  let numeroDesc = Math.floor(Math.random() * 6);

  const descripcion = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
  ];
  let dpto = descripcion[numeroDesc]; 
  let local=faker.address.city();
  let prov=faker.address.state();
  let codigo=faker.address.zipCode();

  Order.bulkCreate([
    {
      calle: cale,      
      numero:num,
      piso:pi,
      departamento: dpto,
      localidad:local,
      provincia:prov,
      cp:codigo,
      userId: usuario,
      orderStatusId: idOrderStatus
    },
  ])/* .then(() => {
    console.log(" Ordenes creadas = 15 ");
  }); */
  console.log(" Ordenes creadas = ", cantidad);

} 