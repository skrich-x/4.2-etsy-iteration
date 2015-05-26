var _ = require('underscore');
var items = require('./items.json');
var total = _.pluck(items, 'price');

//Question 1//
/*Reduce the array to sum all prices then divide that sum by the array's lenght*/

var sum = total.reduce(function(a, b) {
  return (a + b);
});

console.log("The average price is $" + (sum / items.length).toFixed(2));

//Question 2 //
/*using filter to find results in the array which are priced between 14 and 18 - then console.log each item's title*/

var filterResult = _.filter(items, function(priceList) {
  return Number(priceList.price) > 14 && Number(priceList.price) < 18;
});

_.each(filterResult, function(item) {
  console.log(item.title);
});


//Question 3//
/*used filter to locate Item with string "GBP" in the currency_code portion of the array*/
var filterGBP = _.filter(items,
  function(britishMoney) {
    return (britishMoney.currency_code) === "GBP";
  }
);

_.each(filterGBP, function(item) {
  console.log((item.title) + " costs £" + (item.price));
});

//Question 4 //
/* Used filter to locate and console log items with "wood" in the materials array.*/

var woodItems = _.filter(items, function(item) {
  if (_.contains(item.materials, "wood")) {
    return item;
  }
});
_.each(woodItems, function(item) {
  console.log(item.title + " is made of wood.");
});


//Question 5 //
/*Use filter to locate and display all items whose list of materials are = or > 8. Then console.log each of those item's titles and list of materials*/

var filterEightMaterials = _.filter(items, function(eightMaterials) {
  return (eightMaterials.materials.length) >= 8;
});

_.each(filterEightMaterials, function(item) {
  console.log(item.title);
  console.log(item.materials);
});

//Question 6//
/*set variable =to filter which locates 'i_did' in who_made then log the length of the array + the required string*/

var filterIDid = items.filter(function(item) {
  return item.who_made === "i_did";
});

console.log(filterIDid.length + " were made by the seller");
