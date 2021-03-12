"use strict";
const {
  Categories
} = require("../../models/Index");

console.log("")
console.log("Comienza creación de categorias")

Categories.bulkCreate([{
      statusDescription: "Conectividad"
    },
    {
      statusDescription: "Pantallas y displays"
    },
    {
      statusDescription: "Motores, actuadores, servos y accesorios"
    },
    {
      statusDescription: "Cursos"
    },
    {
      statusDescription: "Sensores"
    }
  ])
  
  .then(() => {
    console.log("");
    console.log("categorias creadas = 7")
  })

