const videojs = require('video.js');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/lecture_playback', function (req, res) {
  res.render('lecture_playback', {video_link: "https://clarity-mithacks.s3.us-east-2.amazonaws.com/classes/cmu_db_class/lecture1.mp4"});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
