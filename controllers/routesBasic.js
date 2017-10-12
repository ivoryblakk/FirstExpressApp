var express = require('express');
var router = express.Router();
var logic = require('../logic/logic');
var controller = require('../controllers/controller');
var model = require('../models/model');
//var bodyParser = require('body-parser'); we dont't need body pareser because its in the app.js file
controller.logic = logic;
controller.model = model;

router.get('/', (req, res) => {
  res.send('hello');
});

router.get('/basic', (req, res) => {
  res.render('home');
});
router.post('/basic', (req, res) => {
  var operation = req.body.operation; // home.ejs  name: operation value: " the operation (+/*-)"
  var num1 = req.body.arg1;
  var num2 = req.body.arg2;
  var result = controller[operation](Number(num1), Number(num2)); // when exported is looses the variable name calcController
  console.log(req.body); // console log the body to see the outputs on your ejs file for example this is conneted to home.ejs
  res.render('home', { result: result }); // things have to be returned as a object
});

module.exports = router;
