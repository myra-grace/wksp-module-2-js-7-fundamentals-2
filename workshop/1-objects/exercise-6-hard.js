// Exercise 6
// -------------------

var favoriteDessert = {
    scott: 'brownies',
    fred: 'tiramisu',
    lisa: 'chocolate cake',
    riley: 'ice-cream',
    sunny: 'cheese cake',
    john: 'ice-cream',
    beth: 'cheese cake',
    summer: 'ice-cream',
    morty: 'apple pie',
    rick: 'brownies',
    andrew: 'cheese cake',
    jerry: 'rhubard pie',
    'jean-luc': 'cheese cake',  
    tiffany: 'waffles',
    melissa: 'profiteroles',
};

// Above is an object with the results of a poll.
// Write a script that outputs the following:

// A)
// the desserts ranked from most popular to least popular.
// e.g. 1. <DESSERT_NAME>
//      2. <DESSERT_NAME>
//      ...

let desserts = Object.values(favoriteDessert);
console.log(desserts)

let occurrence = {};

desserts.forEach(function (dish) {
    if (occurrence[dish]) {
        occurrence[dish]++;
    } else {
        occurrence[dish] = 1;
    }
});
console.log('occurrence: ', occurrence);

let keys = Object.keys(occurrence);

let arr = keys.sort(function(a, b) {
    return occurrence[b] - occurrence[a];
});

console.log(arr);

// B)
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ...

Object.keys(occurrence).forEach(dessertKey => {
    let names = [];
    Object.keys(favoriteDessert).forEach(name => {
        if (favoriteDessert[name] === dessertKey) {
            names.push(name);
        }
    });
    console.log(`${dessertKey}: ${names.join(', ')}`);
});