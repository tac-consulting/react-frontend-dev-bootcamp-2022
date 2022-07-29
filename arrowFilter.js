const a=[3,5,6,8];
const b=a.filter(c=>c==5 ||c==8)
console.log(b);


let numbers = [2,4,5,1,20];
let filtered = numbers.filter(number => number < 5);
console.log(filtered ); 



let items = [{ p:100,p:200},
    { p: 180,p:800},
    { p: 250,p:1500}];

let price=items.filter(item=> item.p<1000);
console.log(price);