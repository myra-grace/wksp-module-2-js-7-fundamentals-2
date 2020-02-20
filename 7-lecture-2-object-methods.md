# 2.7.2 - JS - Object Methods

---

## Situation

You have an object that you _need_ to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }


object.keys(friendsAge).forEach(friend => {
    console.log(friendsAge[friend]);
})

// 'friend =>' is when the key name is specified. We're telling it to treat the keys as 'friend' to inject it into ->
// [friend] is pulling out the value of 'friend' which is the age
```

Now I am interested in the average age of my friends.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

const age = object.values(friendsAge);
```

const friendsAge = [
    {name: 'Kevin', age:32}
    {name: 'Ricky', age:30}
    {name: 'Morty', age:14}
    {name: 'Jerry', age:35}
]

friends.sort((a,b) => a.age - b.age);

// morty, kevin, jerry, rick

---