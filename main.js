let myAge = 29;
// I am creating variable to compare dog years to human years.  Using my current age for myAge. //
let earlyYears = 2;
// Creating a variable to account for the first two years of a dog's life. //
earlyYears *= 10.5;
// console.log(earlyYears);
let laterYears = myAge - 2;
// This variable evens out the aging conversion //
laterYears *= 4;
// Each following year equates to 4 dog years, so I need a variable to represent that. //
// console.log(earlyYears);
// console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
// A variable to calculate a dog's age against human years. //
let myName = 'Roukeyatou'.toLowerCase();
// My name in lowercase //
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// Printing the results to the console using temperate literals. //
