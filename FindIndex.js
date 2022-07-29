const animals = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log("Indexof...")
console.log(animals.indexOf('bison'));
console.log(animals.indexOf('bison', 2));
console.log(animals.indexOf('giraffe'));

//find()
const array1 = [5, 150, 8, 180, 44];
const found = array1.find(element => element > 10);
console.log("Find...")
console.log(found);

//findIndex()
const array2 = [15, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log("FindIndex...")
console.log(array2.findIndex(isLargeNumber));