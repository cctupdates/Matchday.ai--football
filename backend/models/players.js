const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    jerseyNumber: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        default: 'unset'
    },
    color: {
        type: String,
        default: 'red'
    },
    avatar: {
        type: String,
        required: false
    }
});

module.exports = Player = mongoose.model('Player', PlayerSchema)