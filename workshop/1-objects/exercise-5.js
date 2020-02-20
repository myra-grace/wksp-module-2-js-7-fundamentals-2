// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
    {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
    {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
    {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
    {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
    {name: {first: "Louis", last: "Reasoner"}, age: 21},
    {name: {first: "Shahan", middle: "Haig", last: "Krakirian"}, age: 21},
    {name: {first: "Myra-Grace", middle: "", last: "Salinas"}, age: 23}
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).


//-------------------------------------------------

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.

function avgAge(peopleArr) {
    let sum = 0;
    people.forEach(person => {
        sum += person.age;
    });
    return sum / peopleArr.length; 
}

console.log(`Average age is ${avgAge(people)}.`);


//-------------------------------------------------

// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?

function betterFullName(person) {
    let fullname = person.name.first;

    if (!!person.name.middle) {
        fullname += ' ' + person.name.middle;
    }

    return fullname + " " + person.name.last;
}

function fullName(peopleArr) {
    return peopleArr.map(person => {
        return betterFullName(person);
    });

}

console.log(fullName(people)); 


//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age.. 

function olderPeople(peopleArr, age) {
    return peopleArr.filter(people => {
        return people.age > age;
    });
}

console.log(olderPeople(people, 26));
