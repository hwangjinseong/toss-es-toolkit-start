declare function differenceBy<T, U>(
	firstArr: readonly T[],
	secondArr: readonly T[],
	mapper: (value: T) => U
): T[];

export { differenceBy };
