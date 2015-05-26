var _ = require('underscore');
var items = require('./items.json');

var total = _.pluck(items, 'price');

//Question 1//
var sum = total.reduce(function(a, b) {
  return (a+b);
});

console.log("The average price is " +  (sum/items.length));

//Question 2 //
