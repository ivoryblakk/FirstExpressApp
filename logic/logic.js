calcLogic = {
  // all the work is complete here
  add: function(arg1, arg2, lastResult) {
    var result = null;
    if (arg1 && arg2) {
      result = arg1 + arg2;
    } else if (arg1) {
      result = arg1 + lastResult;
    } else {
      result = arg2 + lastResult;
    }
    return result;
  },
  subtract: function(arg1, arg2, lastResult) {
    var result = null;
    if (arg1 && arg2) {
      result = arg1 - arg2;
    } else if (arg1) {
      result = lastResult - arg1;
    } else {
      result = lastResult - arg2;
    }
    return result;
  },
  multiply: function(arg1, arg2, lastResult) {
    var result = null;
    if (arg1 && arg2) {
      result = arg1 * arg2;
    } else if (arg1) {
      result = arg1 * lastResult;
    } else {
      result = arg2 * lastResult;
    }
    return result;
  },
  divide: function(arg1, arg2, lastResult) {
    var result = null;
    if (arg1 && arg2) {
      result = arg1 / arg2;
    } else if (arg1) {
      result = arg1 / lastResult;
    } else {
      result = arg2 / lastResult;
    }
    return result;
  },
  clear: function(lastResult) {
    var result = null;
    var zero = 0;
    result = lastResult * zero;
    return result;
  }
};
module.exports = calcLogic;
