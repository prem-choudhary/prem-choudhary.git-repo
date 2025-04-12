const numbers = [1, 2, 3, 4];

// Double each number (map)
const doubled = numbers.map((num) => num * 2);

// Filter even numbers
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);
// Sum all numbers (reduce)
const sum = numbers.reduce((acc, num) => acc + num, 0);
//
console.log(sum);
