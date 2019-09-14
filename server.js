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
  res.render('lecture_playback');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
