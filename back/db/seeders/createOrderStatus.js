// tatus Order Descrption


const { OrderStatus } = require("../../models/Index");

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
  ]).then(() => {
    console.log(" order status creadas ", i);
  });
} 

