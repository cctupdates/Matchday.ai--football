const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const FootballVideoSchema = new mongoose.Schema({
    videoUrl:{
        type: String,
        required: true,
    },
    timestamps:{
        type: Number,
        required: true,
    },
    coordinatesX:{
        type:Number,
        required: true,
    },
    coordinatesY:{
        type:Number,
        required: true,
    },
})

module.exports = mongoose.model("FootballVideo" , FootballVideoSchema)