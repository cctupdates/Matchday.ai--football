const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const FootballVideo = require('../../models/videotimestamps')


router.get("/", (req, res) => {
    FootballVideo.find({}).then(data => {
        res.status(200).json({data})
    })
    .catch(err => {
        console.log(err)
    })
});

router.post("/", (req, res) => {
    const {videoUrl, timestamps, coorX, coorY} = req.body
    console.log("dddddddddd",req.body)
    const footballVideo = new FootballVideo({
        videoUrl,
        timestamps,
        coordinatesX:coorX,
        coordinatesY:coorY,
    })
    footballVideo.save().then(result => {
        res.status(201).json({footballVideo:result})
    }).catch(err =>{
        console.log(err)
        res.status(204).json(err)
    })
});

module.exports = router;
