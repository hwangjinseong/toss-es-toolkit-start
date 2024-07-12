type AreItemsEqualType<T> = (x: T, y: T) => boolean;

export function differenceWith_1<T>(
	firstArr: T[],
	secondArr: T[],
	areItemsEqual: AreItemsEqualType<T>
): T[] {
	return firstArr.filter(
		(x1) => !secondArr.some((x2) => areItemsEqual(x1, x2))
	);
}

export function differenceWith_2<T>(
	firstArr: T[],
	secondArr: T[],
	areItemsEqual: AreItemsEqualType<T>
): T[] {
	return firstArr.reduce((acc: T[], val) => {
		if (!secondArr.some((x2) => areItemsEqual(val, x2))) {
			acc.push(val);
		}
		return acc;
	}, []);
}
export function differenceWith_3<T>(
	firstArr: T[],
	secondArr: T[],
	areItemsEqual: AreItemsEqualType<T>
): T[] {
	const set2 = new Set(secondArr);
	return firstArr.filter(
		(x1) => ![...set2].some((x2) => areItemsEqual(x1, x2))
	);
}
