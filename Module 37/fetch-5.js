// JSON => stringfy, parse
const student = {
    name: 'Salib Khan',
    age: 31,
    movies: ['King khan', 'Dhakar Mastan'],
}

const studentJSON = JSON.stringify(student);
console.log(studentJSON);
const studentObj = JSON.parse(student);
console.log(studentObj);

// fetch
fetch('url')
.then(res => res.json())
.then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [10, 20, 30];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in



// add or remove from an array
const products = [
    {name: 'laptops', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 52000, brand: 'iphone', color: 'gold'},
    {name: 'calculator', price: 62000, brand: 'casio', color: 'black'},
    {name: 'sunglass', price: 66000, brand: 'ribon', color: 'yellow'},
];

const newProduct = {name: 'webcame', price: 700, brand: 'lal'};

// copy products array & then add newProduct
const newProducts = [...newProduct, newProduct];

// create a new array without one specific item
// remove phones means a new array without the array
const remaining = products.filter(product => product.name != 'phone');