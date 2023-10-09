/*
// numbers and maths

const score = 400;
console.log(score);
// it will give number with specifying its type
const balance =  new Number(100);
console.log(balance);

console.log(balance.toString());
// since it is converted to string we can use all string methods
console.log(balance.toString().length);
// used to add precision value after decimal
// usually used in e-comm app
console.log(balance.toFixed(2));

// precision value
const otherNumber = 123.4322224;
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(2));

// number representation
const hundreds = 10000000;
console.log(hundreds.toLocaleString());// convert acc to Us standard
console.log(hundreds.toLocaleString("en-IN"));//acc to indian standard

console.log(hundreds.MIN_);

// +++++++++++++++++++++ Maths ++++++++++++++++++++++
// math library comes with js by default.

console.log(Math);
// absolute value -ve to +ve only
console.log(Math.abs(-4));
// give value without decimal
console.log(Math.round(4.5));
// chose top value
console.log(Math.ceil(4.2));
// give lower value
console.log(Math.floor(4.2));
// min max value
console.log(Math.min(4,3,46,7));
console.log(Math.max(4,3,46,7));

// random will always give a value in b/w 0-1
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// define within a range
const min = 10;
const max = 20;

// (Math.random() * (max - min + 1)) + min 
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// date time in js

// instance of the obj of date
const myDate = new Date();
console.log(myDate);//will also return time in milisec
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

*/

const myCreationDate = new Date(2023,0,23);
console.log(myCreationDate.toDateString());
// date time
// const newDate = new Date(2023, 0, 23, 5, 30);
// const newDate = new Date("2023-01-23");
const newDate = new Date("01-23-2023");
console.log(newDate.toLocaleString());

// time stamp in js --used in polls etc
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreationDate.getTime());
console.log(Math.log(Date.now()/1000));//convert into seconds

// some more methods
let otherDate = new Date();
console.log(otherDate);
console.log(otherDate.getMonth() + 1);
console.log(otherDate.getDay());
otherDate.toLocaleString("default",{
    weekday: "long"
})

console.log(otherDate);