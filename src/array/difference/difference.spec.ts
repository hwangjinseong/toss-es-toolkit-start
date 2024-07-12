import { difference } from "es-toolkit";
import { difference_1, difference_2, difference_3 } from "./code";

describe("difference", () => {
	it("두 배열의 차집합을 반환해야 한다", () => {
		const array1 = [1, 2, 3, 4, 5];
		const array2 = [2, 4];
		expect(difference(array1, array2)).toEqual([1, 3, 5]);
		expect(difference_1(array1, array2)).toEqual([1, 3, 5]);
		expect(difference_2(array1, array2)).toEqual([1, 3, 5]);
		expect(difference_3(array1, array2)).toEqual([1, 3, 5]);
	});
});
