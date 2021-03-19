"use strict";
const faker = require("faker"); 
faker.locale="es";
const {User} = require("../../models/Index");
const cantidad = 60

console.log("")
console.log("Comienza creación de usuarios")


const userPromise = ()=>User.bulkCreate([{
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


const userPromise2 = ()=>{for(let i=0; i<cantidad; i++){

User.bulkCreate([  
{
  name: faker.name.findName(), 
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  isAdmin: false,
  password: "1234",
},

  ])
}
}


userPromise()
.then (()=>userPromise2())

console.log("")
console.log("Fin creación de usuarios = ", cantidad)
