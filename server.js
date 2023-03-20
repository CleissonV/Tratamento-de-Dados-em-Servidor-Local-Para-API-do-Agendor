const express = require('express');
const cors    = require('cors');
const app     = express();

app.set("view engine", 'ejs');
app.use(express.json());
app.use(cors({ origin: true })); 

app.get("/", function(req, res) {
  res.render('index');
});

app.listen(3000);
console.log("Rodando na porta 3000");