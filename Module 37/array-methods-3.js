const products = [
    {name: 'laptops', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 52000, brand: 'iphone', color: 'gold'},
    {name: 'calculator', price: 62000, brand: 'casio', color: 'black'},
    {name: 'sunglass', price: 66000, brand: 'ribon', color: 'yellow'},
]


const brands = products.map(product => product.brand);
const brandName = [...brands];
console.log(brandName);

const prices = products.map(product => product.price);
console.log(prices);

products.forEach(pr => console.log(pr.color));

products.forEach(product => {

})

// filter
const cheap = products.filter(pr => pr.price <= 60000);
console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);


// find -- return object directly
const special = products.find(p => p.name.includes('n'));
console.log(special)