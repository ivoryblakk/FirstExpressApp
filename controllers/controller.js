calcController = {
  model: {},
  logic: {},
  add: function(arg1, arg2) {
    var lastResult = calcModel.lastResult;
    var result = calcLogic.add(arg1, arg2, lastResult); // the function sends the 2 args from the controller which sends it to the logic
    calcModel.lastResult = result;
    // calcView.display(result);
    return result;
  },
  subtract: function(arg1, arg2) {
    var lastResult = calcModel.lastResult;
    var result = calcLogic.subtract(arg1, arg2, lastResult); // the function sends the 2 args from the controller which sends it to the logic
    calcModel.lastResult = result;
    return result;
  },
  multiply: function(arg1, arg2) {
    var lastResult = calcModel.lastResult;
    var result = calcLogic.multiply(arg1, arg2, lastResult); // the function sends the 2 args from the controller which sends it to the logic
    calcModel.lastResult = result;
    return result;
  },
  divide: function(arg1, arg2) {
    var lastResult = calcModel.lastResult;
    var result = calcLogic.divide(arg1, arg2, lastResult); // the function sends the 2 args from the controller which sends it to the logic
    calcModel.lastResult = result;
    return result;
  },
  interest: function(operation, arr) {
    //console.log('in controller ' + this.interestLogic);
    var result = this.interestLogic[operation](arr);
    //console.log(result);
    return result;
  },
  clear: function() {
    var lastResult = calcModel.lastResult;
    var result = calcLogic.clear(lastResult);
    return result;
  }
};

module.exports = calcController; // when exported is looses the variable name calcController
