//////////////// REVIEWS

const { Reviews } = require("../../models/Index");
console.log("")
console.log("Comienza creacion de Reviews")

for (let i = 0; i < 45; i++) {
  let numeroDesc = Math.floor(Math.random() * 3);
  const descripcion = [
    "Muy malo",
    "Regular, fallaron algunas cosas",
    "Bueno, recomendable",
    "Excelente",
  ];
  let descReview = descripcion[numeroDesc];
  let puntProd = Math.floor(Math.random() * 5) + 1;
  let usuario = parseInt (Math.floor(Math.random() * 9) + 1);
  let idProduct =  parseInt( Math.floor(Math.random() * 50) + 1);
  
  Reviews.bulkCreate([
    {
      descripcion: descReview,
      puntaje: puntProd,
      userId: usuario,
      productId: idProduct
    },
  ])/* .then(() => {
    console.log("");
    console.log(" reviews creadas= ", i);
  }) */;
}  
console.log("");
console.log(" Fin reviews creadas ");