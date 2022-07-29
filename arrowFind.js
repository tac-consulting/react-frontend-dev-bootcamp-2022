const a =[5, 12, 8, 130, 44];
const b = a.find(element => element > 10);
console.log(b);



let c = [{
    name:'sony',
    credit: 100
}, {
    name:'Rani',
    credit: 200
}, {
    name:'sweety',
    credit: 300
}];
let d=c.find((c) => c.credit > 100)
console.log(d);