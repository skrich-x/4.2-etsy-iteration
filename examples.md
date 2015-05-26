var _ = require('underscore');
var data = require('./data.json');
var items = data.data;

// side effects
_.each(items, function(item){
  // console.log(item.name);
});

// map: transforming a collection into an array of the same length
// NO SIDE EFFECTS
// need to capture its return value

var mapResult = _.map(items, function(item){
  // whatever you return for each item takes the items place in the new array
  return item.name.replace(/ /g, '_');
});

// filter: filtering a collection into an array of equal or lesser length
// the values of the new array come from the original
// the iterator function should return true if that item should be in the result

var filterResult = _.filter(items, function(item){
  return Number(item.abv) < 5;
});

var sessionNames = _.pluck(filterResult, 'name');
console.log(sessionNames);

// reduce: transforming a collection into a single value (which can be anything, including an array)
var drunkiest = _.reduce(items, function(a, b) {
  return a.abv > b.abv ? a : b;
});
console.log(drunkiest);
