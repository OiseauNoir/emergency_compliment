var express = require('express');
var router = express.Router();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
]

var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];


/* GET home page. */
router.get('/', function(req, res, next) {
  let compliment = compliments[Math.floor(Math.random()*compliments.length)];
  let color = colors[Math.floor(Math.random()*colors.length)];
  res.render('index', {
    title: 'Emergency Compliment!',
    compliment: compliment,
    color: color
  });
});




module.exports = router;
