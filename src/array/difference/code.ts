export function difference_1<T>(array1: T[], array2: T[]): T[] {
	return array1.filter((item) => !array2.includes(item));
}

export function difference_2<T>(array1: T[], array2: T[]): T[] {
	return array1.reduce((acc, val) => {
		if (!array2.includes(val)) {
			acc.push(val);
		}
		return acc;
	}, [] as T[]);
}

export function difference_3<T>(array1: T[], array2: T[]): T[] {
	const set2 = new Set(array2);
	return Array.from(new Set(array1.filter((item) => !set2.has(item))));
}
