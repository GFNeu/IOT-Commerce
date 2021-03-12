"use strict";
const faker = require("faker"); 
const {User} = require("../../models/Index");

console.log("")
console.log("Comienza creación de usuarios")


User.bulkCreate([   {
  name: "santi",
  lastName: "santu",
  email: "santi@santi.com",
  isAdmin: true,
  password: "1234"
}, 
  ])
  .then(() => {
    console.log("usuario santi suntu creado ")
  })


for(let i=0; i<55; i++){

User.bulkCreate([  
{
  name: faker.name.findName(), 
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  isAdmin: false,
  password: "1234",
},

  ])
 /*  .then(() => {
        console.log("usuarios creados= ",i)
  }) */
}

console.log("")
console.log("Fin creación de usuarios")
