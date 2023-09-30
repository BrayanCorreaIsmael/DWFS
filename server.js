const express = require("express");
const app = express();

const archivoBD = require("./conexion");

//Importacion del servicio de rutas y modelo usuario
const rutausuario = require("./rutas/usuario");

app.use("/api/usuario", rutausuario);

//Importar body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: "true" }));

//endpoints
app.get("/", (req, res) => {
  res.end("Hi al lado del server backend ejecutando ");
});

//Setear el server basico
app.listen(5000, function () {
  console.log("El servidor esta runeando OK 200");
});
