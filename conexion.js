const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/");

const obejtobd = mongoose.connection;

obejtobd.on("connected", () => {
  console.log("Conectada con la MongoBD, GRANDE PA!!!!!");
});
obejtobd.on("error", () => {
  console.log("Alto error con la MongoBD!");
});

module.exports = mongoose;
