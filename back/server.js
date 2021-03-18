const express = require("express");
const http = require("http");
const cors = require("cors");
const morgan = require('morgan')
const routes = require('./routes')
const db = require('./db')
const app = express();

app.use(morgan('tiny'))

//app.use(express.static(path.resolve(__dirname, "./src/public")));
app.use(cors()); // esta librería es para poder trabajar front con back en localhost

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//RUTAS
app.use('/api', routes)

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  res.status(404).send(err.message);
  console.log(err)
  //res.sendStatus(404).send(err);
})

db.sync({ force:false}).then(() => {
  /* force: true */
  http.createServer(app).listen(8080, () => {
    console.log(`Server listening at port 8080`);
  });
}); 

