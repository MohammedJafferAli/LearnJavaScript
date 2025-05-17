let day ='tuesday '


console.log(day.length)//Get the length

let subDay = day.slice(1,4) //Get the sub string 
console.log(subDay)
console.log(subDay.length)
console.log(day[2])//Get a char from a string using by giving specific index

//Split the string tue day
let splitDay = day.split('s')
console.log(splitDay)
console.log(splitDay[0].length) //After split, consider it as an array and give the index
console.log(splitDay[1].trim().length) //trim extra spaces

//String to int parse

let currentdate = '28';
let brithdate ='18';

//let diff = currentdate - brithdate; 
let diff = parseInt(currentdate) - parseInt(brithdate);
console.log(diff)
console.log(diff.toString())

//String concat

let quote = day + " is Funday"
console.log(quote)

//Find "day" word in the string
let boolValue = quote.includes(day)
console.log(boolValue)

//Find the 1st occurance of any string like 'day'
let indexValue = quote.indexOf('day')
console.log(indexValue)

//Find the 2ndst occurance of any string like 'day'
console.log(quote.indexOf('day',5))

//Find the number of occurance in the string
var count = 0;
var searchResult = quote.indexOf('day');

while (searchResult !== -1) {
    count++;
    searchResult = quote.indexOf('day', searchResult + 1);
}

console.log(count);
