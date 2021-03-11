"use strict";
const {
  Categories
} = require("../../models/Index");

Categories.bulkCreate([{
      statusDescription: "Sensores"
    },
    {
      statusDescription: "Categoria 2"
    },
    {
      statusDescription: "Categoria 3"
    },
    {
      statusDescription: "Categoria 4"
    }
  ])
  .then(() => {
    console.log("categorias creadas")
  })

