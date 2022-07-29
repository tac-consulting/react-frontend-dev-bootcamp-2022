//combined
const a1 = [5,6,7];
const all = [1,2,3,...a1,8,9,10];
all.pop();
console.log("joined values")
console.log(all);
//copy
let marks = [83, 75, 88];
let copiedmarks = marks;
marks.push(100)
console.log("copy of marks")
console.log(copiedmarks); 
//array with string
const arrValue = ['My', 'name', 'is', 'Pavi'];
arr1=arrValue;
console.log(arrValue);   
console.log(...arr1); 
//objects
let address={
city:"Nizamabad",
company:"tac"
};
let contact={
    mobile:9998882233
};
let tot_add={...address,...contact};
console.log(tot_add)

//function
let func = function(...args) {
    console.log(args);
}
func("pavi"); 
