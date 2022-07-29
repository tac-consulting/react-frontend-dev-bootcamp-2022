const numbers = [10, 20, 30, 40, 50];
let difference = numbers.reduce(
    (accumulator, currentValue) => accumulator - currentValue
  );
  console.log(difference);