const express = require("express");
const { connectDatabase } = require("./database/index.js");
const routes = require("./routes/index.js");
const bodyParser = require("body-parser");

const app = express();

connectDatabase();

// Habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());

app.listen(3001, () => {
  console.log("listening on port", 3001);
});
