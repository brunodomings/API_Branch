const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Boa noite, alteração aqui!tentativa numero 340i149821");
});


app.listen(3005, () => {
  console.log("Servidor on");
});