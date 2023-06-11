const mongoose = require("mongoose");
const colors = require("colors");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Lidhja mongoDb-server eshte kryer me sukses: ${data.connection.host}`.green.bold);
    });
};

module.exports = connectDatabase;
