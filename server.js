const express = require("express");
const app = express();

const archivoBD = require("./conexion");

//endpoints
app.get("/", (req, res) => {
  res.end("Hi al lado del server backend ejecutando ");
});

//Setear el server basico
app.listen(5000, function () {
  console.log("El servidor esta runeando OK 200");
});
