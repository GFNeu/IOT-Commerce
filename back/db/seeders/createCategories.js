"use strict";
const {
  Categories
} = require("../../models/Index");

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
      statusDescription: "Cusos"
    },
    {
      statusDescription: "Sensores"
    }
  ])
  
  .then(() => {
    console.log("categorias creadas")
  })

