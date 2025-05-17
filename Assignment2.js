/* You have an array called productPrices with various product prices.

1. Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.

2. Use the filter method to create a new array called affordableProducts containing only products priced below 50

3. Calculate the total cost of all items in the affordableProducts array using the reduce method. */

var productPrices = [100, 253, 444, 90, 15, 10, 49]; // Array 1 

console.log("Original Prices...........");
console.log(productPrices);

let discountValue = productPrices.map(discount => (discount * 10) / 100);
console.log("Discount applied on each price...........");

console.log(discountValue) // [ 10, 25.3, 44.4, 9, 1.5, 1 ]

let discountedPrices = productPrices.map((value, index) => value - discountValue[index]);
console.log("Product price after discount ...........");
console.log(discountedPrices)

//AffordableProducts
let affordableProducts =productPrices.filter(value=>value<50);
console.log("Affordable Products...........");
console.log(affordableProducts);

//Total cost of afforrdable products
let sumOfAllAffordableProducts = affordableProducts.reduce((sum,value)=>sum+value,0);
console.log("sum of all Affordable Products...........");
console.log(sumOfAllAffordableProducts);