const mongoose = require("mongoose");
const colors = require("colors");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`mongodb connected with server : ${data.connection.host}`.bgBlue.white);
    })
}

module.exports = connectDatabase;