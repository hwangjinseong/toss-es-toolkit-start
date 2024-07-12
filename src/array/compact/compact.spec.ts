import { compact } from "es-toolkit";
import { compact_1, compact_2, compact_3 } from "./code";

describe("compact", () => {
	it("배열에서 거짓 값을 제거해야 한다", () => {
		const arr = [0, 1, false, 2, "", 3, null, undefined, 4, NaN, 5];
		expect(compact(arr)).toEqual([1, 2, 3, 4, 5]);
		expect(compact_1(arr)).toEqual([1, 2, 3, 4, 5]);
		expect(compact_2(arr)).toEqual([1, 2, 3, 4, 5]);
		expect(compact_3(arr)).toEqual([1, 2, 3, 4, 5]);
	});
});
