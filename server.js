const videojs = require('video.js');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.all("/api/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/lecture_playback', function (req, res) {
  res.render('nicer_playback', {video_link: "https://clarity-mithacks.s3.us-east-2.amazonaws.com/classes/cmu_db_class/lecture1.mp4"});
})

app.listen(3000, function () {
  console.log('Clarity app listening on port 3000!')
})
