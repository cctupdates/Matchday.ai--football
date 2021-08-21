const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const Player = new Schema({
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

})
const MatchSchema = new Schema({
    teamAName: {
        type: String,
        required: true
    },
    teamBName: {
        type: String,
        required: true
    },
    teamA: {
        type: [Player],
        required: true,
    },
    teamB: {
        type: [Player],
        required: true
    }
})

module.exports = Matches = mongoose.model('matches', MatchSchema)