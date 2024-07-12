import { differenceBy } from "es-toolkit";
import { differenceBy_1, differenceBy_2, differenceBy_3 } from "./code";

describe("differenceBy", () => {
	it("differenceBy", () => {
		const array1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
		const array2 = [{ id: 2 }, { id: 4 }];
		const mapper = (item: { id: number }) => item.id;
		expect(differenceBy(array1, array2, mapper)).toEqual([
			{ id: 1 },
			{ id: 3 },
			{ id: 5 },
		]);
		expect(differenceBy_1(array1, array2, mapper)).toEqual([
			{ id: 1 },
			{ id: 3 },
			{ id: 5 },
		]);
		expect(differenceBy_2(array1, array2, mapper)).toEqual([
			{ id: 1 },
			{ id: 3 },
			{ id: 5 },
		]);
		expect(differenceBy_3(array1, array2, mapper)).toEqual([
			{ id: 1 },
			{ id: 3 },
			{ id: 5 },
		]);
	});
});
