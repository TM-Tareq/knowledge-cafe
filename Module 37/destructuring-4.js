// array destructuring
const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1]

// const [x, y] = [42, 65];

const [x, y] = numbers
console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 88]
const [first, second] = boxify;

console.log(boxify(90, 85))

const student = {
    name: 'Salib Khan',
    age: 31,
    movies: ['King khan', 'Dhakar Mastan'],
}

const [firstMovie, secondMovie] = student.movies;


// object destructuring
{const {name, age} = {name: 'alu', age: 15};}
const {name, age} = {id: 12, name: 'alu', salary: 1200, age: 15}

