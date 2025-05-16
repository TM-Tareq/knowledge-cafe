const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 31,
    movies: ['King khan', 'Dhakar Mastan'],
}

const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also like movies ${student.movies[0]}`;
console.log(about);

// arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = [...numbers];

// create a new array from an older array & add an element
const currentNumbers = [...numbers, 55];
console.log(currentNumbers);