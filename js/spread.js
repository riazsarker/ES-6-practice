const max = Math.max(34,435,6432,5353,34);

const numbers=[12,342,34,4323,443];
const largest = Math.max(...numbers);
console.log(...numbers);

console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);

console.log(numbers);
console.log(numbers2);
