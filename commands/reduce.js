const people = [
    {
        name: 'Raju',
        age:28,
        occupation: 'web devloper'
    },
    {
        name: 'Sai',
        age:26,
        occupation: 'nurse'
    },
    {
        name: 'Siva',
        age:35,
        occupation: 'Doctor'
    }
];
const totalAge = people.reduce((total, person)=>{return total + person.age;},0);
console.log(totalAge);