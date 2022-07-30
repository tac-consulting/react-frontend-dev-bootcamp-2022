let dog = { name: 'Duke' };
let dog2 = dog;
console.log(dog, dog2); // { name: 'Duke' } { name: 'Duke' }

dog.name = 'Max';
console.log(dog, dog2); // { name: 'Max' } { name: 'Max' }

function changeName(dogObj) {
  dogObj.name = 'Fido';
}
changeName(dog2);
console.log(dog, dog2); // { name: 'Fido' } { name: 'Fido' }
