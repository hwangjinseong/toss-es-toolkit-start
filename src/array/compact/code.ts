export function compact_1<T>(array: T[]) {
	return array.filter(Boolean);
}

export function compact_2<T>(array: T[]) {
	return array.reduce((acc, val) => {
		if (val) {
			acc.push(val);
		}
		return acc;
	}, [] as T[]);
}

export function compact_3<T>(array: T[]) {
	let compacted = [];
	for (let val of array) {
		if (val) {
			compacted.push(val);
		}
	}
	return compacted;
}
