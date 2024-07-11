declare function countBy<T>(
	arr: T[],
	mapper: (item: T) => string
): Record<string, number>;

export { countBy };
