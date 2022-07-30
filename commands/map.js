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
const names = people.map(person=>{return person.name;});
console.log(names);