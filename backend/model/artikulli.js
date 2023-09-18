const mongoose = require("mongoose");

const artikulliSchema = new mongoose.Schema({
    emri: {
        type:String,
        required: [true, "Ju lutemi shkruani emrin e artikullit!"],
    },
    pershkrimi: {
        type:String,
        required: [true, "Ju lutemi shtoni pershkrimin e produktit!"],
    },
    category: {
        type: String,
        required: [true, "Ju lutemi perzgjedheni kategorine e produktit!"],
    },
    reviews: [
        {
            user: {
                type:Object,
            },
            comment: {
                type: String,
            },
            artikulliId: {
                type: String,
            },
            createdAt: {
                type: Date,
                default:Date.now(),
            }
        },
    ],
});

module.exports = mongoose.model("Artikulli", artikulliSchema);