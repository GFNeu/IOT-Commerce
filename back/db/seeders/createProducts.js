"use strict";
const faker = require("faker");
const { Products } = require("../../models/Index");

/* Products.bulkCreate([
  {
    name: "AD8232 Módulo ECG monitor de pulso cardíaco",
    description: "santu",
    photo:
      "https://www.geekfactory.mx/wp-content/uploads/ad8232-modulo-ecg-monitor-de-pulso-cardiaco.jpg",
    price: 100,
    mark: "Samsung",
    stock: 30,
  },
]).then(() => {
  console.log("Producto 1 creado ");
}); */

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
  
/*   Products.bulkCreate([
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
  });*/
} 

//////////////// REVIEWS

/* const { Reviews } = require("../../models/Index");

for (let i = 0; i < 20; i++) {
  let numeroDesc = Math.floor(Math.random() * 3);
  const descripcion = [
    "Muy malo",
    "Regular, fallaron algunas cosas",
    "Bueno, recomendable",
    "Excelente",
  ];
  let descReview = descripcion[numeroDesc];
  let puntProd = Math.floor(Math.random() * 5) + 1;
  let usuario = Math.floor(Math.random() * 9) + 1;
  Products.bulkCreate([
    {
      descripcion: descReview,
      puntaje: puntProd,
      userId: usuario,
    },
  ]).then(() => {
    console.log(" reviews creadas ", i);
  });
} */
