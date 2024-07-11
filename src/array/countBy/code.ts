// 코드 1
export function countBy_1<T, K extends string | number>(
	array: T[],
	fn: (item: T) => K
): Record<K, number> {
	const counts: Record<K, number> = {} as Record<K, number>;
	for (const item of array) {
		const key = fn(item);
		if (counts[key] === undefined) {
			counts[key] = 1;
		} else {
			counts[key]++;
		}
	}
	return counts;
}

//코드 2
export function countBy_2<T, K extends string | number>(
	array: T[],
	fn: (item: T) => K
): Record<K, number> {
	return array.reduce((counts, item) => {
		const key = fn(item);
		counts[key] = (counts[key] || 0) + 1;
		return counts;
	}, {} as Record<K, number>);
}

// 코드 3
export function countBy_3<T, K extends string | number>(
	array: T[],
	fn: (item: T) => K
): Record<K, number> {
	const counts = new Map<K, number>();
	for (const item of array) {
		const key = fn(item);
		const count = counts.get(key);
		counts.set(key, count !== undefined ? count + 1 : 1);
	}
	return Object.fromEntries(counts) as Record<K, number>;
}
