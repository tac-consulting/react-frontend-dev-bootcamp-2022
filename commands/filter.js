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
const overThirties = people.filter(person=>{return person.age>=30;}).map(person=>{return person.name;});
console.log(overThirties);