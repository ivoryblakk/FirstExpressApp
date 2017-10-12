var express = require('express');
var app = express(); // This is the HANDLER
var bodyParser = require('body-parser');
var path = require('path');
var routesBasic = require('./controllers/routesBasic');
var routesInterest = require('./controllers/routesInterest');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/calculator', routesBasic);
app.use('/calculator', routesInterest);
/*app.get('/math/:operation/:arg1/:arg2', function(req, res) {
  var operator = req.params.operation;
  var num1 = Number(req.params.arg1);
  var num2 = Number(req.params.arg2);
  var operation = controller[operator];
  var result = operation(num1, num2);

  res.send({ number: result });
});*/

app.listen(3000, function() {
  console.log('Server has started');
});

/*app.get('/speak/:animal', function(req, res) {
  var animals = req.params.animal;
  if (animals == 'pig') {
    res.send('The ' + animals + ' says oink!');
  }
  if (animals == 'cow') {
    res.send('The ' + animals + ' says moo!');
  }
  if (animals == 'dog') {
    res.send('The ' + animals + ' says woof!');
  }
});

app.get('/repeat/:string/:num', function(req, res) {
  var str = req.params.string;
  var value = req.params.num;
  var words = '';
  console.log(value);
  for (var i = 0; i < Number(value); i++) {
    words += str + ' ';
  }
  res.send(words);
});

app.get('/', function(req, res) {
  res.send('Hi there, welcome to my assignment!');
});

app.get('*', function(req, res) {
  res.send('Sorry, page not found');
}); */
