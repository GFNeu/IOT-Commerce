// tatus Order Descrption
const { OrderStatus } = require("../../models/Index");

console.log("");
console.log("Comienzo creación de Estado de ordenes");

for (let i = 0; i < 7; i++) {
  const descripcion = [
    "Iniciado",
    "Confirmado",
    "Cancelado",
    "Pendiente",
    "Pago pendiente",
    "Pago confirmado",
    "Pago rechazado",
  ];
  let descReview = descripcion[i];
  
  OrderStatus.bulkCreate([
    {
       statusType: descReview,

    },
  ])/* .then(() => {
    console.log(" order status creadas ", i);
  }) */;
} 

console.log("");
console.log("Fin creación de Estado de ordenes");