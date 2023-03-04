const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost/restapis", {
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { connectDatabase };
