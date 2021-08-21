const express = require('express')
const mongoose = require('mongoose')
const matches = require('./routes/api/matches')
const videotimestamps = require('./routes/api/videotimestamps')
const app = express()
const cors = require('cors')

app.use(cors());

const db = require('./config/config').mongoURI
mongoose.connect(db).then(()=> console.log('MongoDB connected...')).catch(err => console.log(err))

app.use(express.json());
app.use('/api/matches', matches)
app.use('/api/v-timestamp', videotimestamps)

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log('server started on port ', port))