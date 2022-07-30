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
function isDoctor (person){
    return person.occupation==='Doctor';
}

console.log(people.find(isDoctor).name);