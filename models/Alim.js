const mongoose = require("mongoose")
const {Schema} = mongoose

const alimSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Alim", alimSchema)