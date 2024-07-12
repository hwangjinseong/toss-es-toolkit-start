declare function differenceWith<T>(
	firstArr: readonly T[],
	secondArr: readonly T[],
	areItemsEqual: (x: T, y: T) => boolean
): T[];

export { differenceWith };
