var express = require('express');
var router = express.Router();
var interestLogic = require('../logic/interestLogic'); // logic object for interest
var controller = require('../controllers/controller');
controller.interestLogic = interestLogic;

router.get('/interest', (req, res) => {
  res.render('interestHome', { result: null });
});

router.post('/interest', (req, res) => {
  var operation = req.body.operation; // home.ejs  name: operation value: " the operation (+/*-)"
  var num1 = req.body.arg1;
  var num2 = req.body.arg2;
  var num3 = req.body.arg3;
  var num4 = req.body.arg4;
  var arr = [Number(num1), Number(num2), Number(num3), Number(num4)];
  //console.log('route interest');
  //console.log(controller.interestLogic);
  var result = controller.interest(operation, arr); // when exported is looses the variable name calcController
  //console.log(req.body); // console log the body to see the outputs on your ejs file for example this is conneted to home.ejs
  // console.log(result);
  res.render('interestHome', { result: result }); // things have to be returned as a object
});

module.exports = router;
