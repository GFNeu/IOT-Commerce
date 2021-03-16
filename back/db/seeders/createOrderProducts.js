const { OrderProducts } = require("../../models/Index");
const cantidad = 20

for (let i = 0; i < cantidad; i++) {
  
  let numeroDesc = Math.floor(Math.random() * 3);

  const descripcion = [
    "xx esto no va",
    "xx esto no va",
    "xx esto no va",
    "xx esto no va",
  ];
  let descReview = descripcion[numeroDesc];  
  let usuario = parseInt (Math.floor(Math.random() * 50) + 1);
  let idOrderStatus =  parseInt( Math.floor(Math.random() * 6)+1);
  
  Order.bulkCreate([
    {
      statusDescription: descReview,      
      userId: usuario,
      orderStatusId: idOrderStatus
    },
  ])/* .then(() => {
    console.log(" Ordenes creadas = 15 ");
  }); */
  console.log(" Ordenes creadas = ", cantidad);

} 