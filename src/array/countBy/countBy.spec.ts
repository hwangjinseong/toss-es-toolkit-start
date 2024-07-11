import { countBy } from "es-toolkit";
import { countBy_1, countBy_2, countBy_3 } from "./code";

describe("countBy", () => {
	it("각 항목의 발생 횟수를 계산해야 합니다.", () => {
		const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const mapper = (item: number) => (item % 2 === 0 ? "even" : "odd");
		expect(countBy(arr, mapper)).toEqual({
			odd: 5,
			even: 5,
		});
	});

	it("각 항목의 길이를 계산해야 합니다.", () => {
		const words = ["apple", "banana", "cherry", "date", "elderberry"];
		const mapper = (word: string) => word.length.toString();
		expect(countBy_1(words, mapper)).toEqual({
			4: 1,
			5: 1,
			6: 2,
			10: 1,
		});
	});

	it("각 항목의 나이를 계산해야 합니다.", () => {
		const people = [
			{ name: "Alice", age: 20 },
			{ name: "Bob", age: 20 },
			{ name: "Charlie", age: 30 },
			{ name: "Dave", age: 30 },
			{ name: "Eve", age: 30 },
		];
		const mapper = (person: { age: number }) => person.age.toString();
		expect(countBy_2(people, mapper)).toEqual({
			20: 2,
			30: 3,
		});
	});

	it("각 항목의 부호를 계산해야 합니다.", () => {
		const numbers = [1, -2, 3, -4, 5, -6];
		const mapper = (num: number) => (num >= 0 ? "positive" : "negative");
		expect(countBy_3(numbers, mapper)).toEqual({
			positive: 3,
			negative: 3,
		});
	});
});
