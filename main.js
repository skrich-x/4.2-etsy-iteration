var _ = require('underscore');
var items = require('./items.json');

var total = _.pluck(items, 'price');

//Question 1//
var sum = total.reduce(function(a, b) {
  return (a+b);
});

console.log("The average price is $" +  (sum/items.length).toFixed(2));

//Question 2 //

var filterResult = _.filter(items, function(priceList){
  return Number (priceList.price) > 14 && Number(priceList.price) < 18;
});

filterResult.forEach(function(item){
  console.log(item.title);
}
);


//Question 3//
var filterGBP = _.filter(items,
  function(britishMoney){
    return (britishMoney.currency_code) === "GBP";
  }
  );

filterGBP.forEach(function(item){
  console.log(item.title);
  console.log(" costs £" + (item.price));
}
);

//Question 4 //

var filterWood = _.filter(items,
 function(woody){
   return(woody.materials) === "wood";
 }
 );

filterWood.forEach(function(item){
  console.log(item.title);
}
);
