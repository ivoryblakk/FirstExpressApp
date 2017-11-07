var calcInterestLogic = {
  simple: function(arr) {
    var result = '';

    var [p, r, t, ...theREst] = arr;

    result = p * (1 + r / 100 * t);

    return result;
  },
  compound: function(...arr) {
    console.log('in compound function ' + arr);
    var result = '';
    var [p, r, t, n] = arr[0];

    result = p * Math.pow(1 + r / 100 / n, n * t);

    return result;
  }
};

//console.log(calcInterestLogic.simple([1, 2, 3, 4, 5]));
//calcInterestLogic.compound([5000, 5, 10, 12]);
module.exports = calcInterestLogic;
