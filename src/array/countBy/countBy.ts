import { countBy } from "es-toolkit";

const array = [1, 2, 3, 4, 5, 6];
countBy(array, (x) => (x % 2 === 0 ? "even" : "odd")); // Output: { 'odd': 3, 'even': 3 }

const words = ["apple", "banana", "cherry", "date", "elderberry"];
countBy(words, (word) => word.length.toString()); // Output: { '4': 1, '5': 1, '6': 2, '10': 1 }

const people = [
	{ name: "Alice", age: 20 },
	{ name: "Bob", age: 20 },
	{ name: "Charlie", age: 30 },
	{ name: "Dave", age: 30 },
	{ name: "Eve", age: 30 },
];
countBy(people, (person) => person.age.toString()); // Output: { '20': 2, '30': 3 }

const numbers = [1, -2, 3, -4, 5, -6];
countBy(numbers, (num) => (num >= 0 ? "positive" : "negative")); // Output: { 'positive': 3, 'negative': 3 }
