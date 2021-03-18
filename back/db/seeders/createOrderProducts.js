const { OrderProducts } = require("../../models/Index");
const cantidad = 50

for (let i = 0; i < cantidad; i++) {
  
  let descReview = descripcion[numeroDesc];  
  let usuario = parseInt (Math.floor(Math.random() * 50) + 1);
  let idOrderStatus =  parseInt( Math.floor(Math.random() * 6)+1);
  let cant =  parseInt( Math.floor(Math.random() * 45)+1);
  
  Order.bulkCreate([
    {
      cantidad: cant,
      userId: usuario,
      orderStatusId: idOrderStatus
    },
  ])/* .then(() => {
    console.log(" Ordenes creadas = 15 ");
  }); */
  console.log(" Ordenes creadas = ", cantidad);

} 