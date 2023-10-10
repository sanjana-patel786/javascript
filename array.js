// array 
// when we create copy of an array it will create a shallow copy -- same reference point
// arrays in js are resizable-- can be updated later

// const myArray = [0, 2 , 5, true, "zoya"];
// console.log(myArray);
// // ways to declare the array
// const myArr2 =  new Array(1,3,6,5,6);
// console.log(myArr2[1]);


// array methods
const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr);

myArr.push(6);
myArr.push(7);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(5);
console.log(myArr);

myArr.shift();
console.log(myArr);