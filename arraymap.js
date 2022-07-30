var arr = [2, 5, 6, 3, 8, 9];
  
var newArr = arr.map(function(val, index){
    return {key:index, value:val*val};
})
  
console.log(newArr);