let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex((rank, index) => rank === 7 && index > 2);
console.log(index);