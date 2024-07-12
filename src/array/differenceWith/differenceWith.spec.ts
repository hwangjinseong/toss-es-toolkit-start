import { differenceWith } from "es-toolkit";
import { differenceWith_1, differenceWith_2, differenceWith_3 } from "./code";

describe("differenceWith", () => {
	it("첫 번째 배열에는 있지만 두 번째 배열에는 없는 요소들을 반환해야 한다", () => {
		const array1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
		const array2 = [{ id: 2 }, { id: 4 }];
		const areItemsEqual = (a: { id: number }, b: { id: number }): boolean =>
			a.id === b.id;
		expect(differenceWith(array1, array2, areItemsEqual)).toEqual([
			{ id: 1 },
			{ id: 3 },
			{ id: 5 },
		]);
		expect(differenceWith_1(array1, array2, areItemsEqual)).toEqual([
			{ id: 1 },
			{ id: 3 },
			{ id: 5 },
		]);
		expect(differenceWith_2(array1, array2, areItemsEqual)).toEqual([
			{ id: 1 },
			{ id: 3 },
			{ id: 5 },
		]);
		expect(differenceWith_3(array1, array2, areItemsEqual)).toEqual([
			{ id: 1 },
			{ id: 3 },
			{ id: 5 },
		]);
	});
});
