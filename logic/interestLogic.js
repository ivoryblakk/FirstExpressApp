var calcInterestLogic = {
  simple: function(...arr) {
    var result = '';
    console.log(...arr);
    console.log(arr);
    var [p, r, t, ...theREst] = arr[0];
    console.log(theREst);
    console.log(p);
    console.log(r);
    console.log(t);
    result = p * (1 + r / 100 * t);
    console.log(result);
    return result;
  },
  compound: function(...arr) {
    console.log('in compound function ' + arr);
    var result = '';
    var [p, r, t, n] = arr[0];
    console.log(p);
    result = p * Math.pow(1 + r / 100 / n, n * t);
    console.log('result  hfuidsh ' + result);
    return result;
  }
};

console.log(calcInterestLogic.simple([1, 2, 3, 4, 5]));
calcInterestLogic.compound([5000, 5, 10, 12]);
module.exports = calcInterestLogic;
