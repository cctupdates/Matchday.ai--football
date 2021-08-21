const express = require("express");
const router = express.Router();

const Matches = require("../../models/matches");

// @route GET /api/matches
// @desc Get all matches detailJSON.stringify
router.get("/", (req, res) => {
  Matches.find().then((match) => res.status(200).json(match));
});

// @route POST /api/matches
// @desc Create new matches
router.post("/", (req, res) => {
  const newMatches = new Matches({
    teamAName: req.body.teamAName,
    teamBName: req.body.teamBName,
    teamA: req.body.teamA,
    teamB: req.body.teamB,
  });

  newMatches.save().then((match) => res.json(match));
});

router.put("/update", (req, res) => {
  Matches.findOneAndUpdate(
    // {_id:req.body.matchId}
    { "teamA._id" : "611cf9d5d582e6962c47c68c" },
    {$set : { 'teamA.$.name': "Messi"}},{new:true}
    // { teamA: { $elemMatch: { _id: req.body.playerId }}}
  ).then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    res.status(400).json(err)
  })
});

module.exports = router;
