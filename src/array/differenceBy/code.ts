type Mapper<T, U> = {
	(item: T): U;
};

export function differenceBy_1<T, U>(
	array1: T[],
	array2: T[],
	mapper: Mapper<T, U>
): T[] {
	const mappedArray2 = array2.map(mapper);
	return array1.filter((item) => !mappedArray2.includes(mapper(item)));
}

export function differenceBy_2<T, U>(
	array1: T[],
	array2: T[],
	mapper: Mapper<T, U>
): T[] {
	const mappedArray2 = array2.map(mapper);
	return array1.reduce((acc: T[], val: T) => {
		if (!mappedArray2.includes(mapper(val))) {
			acc.push(val);
		}
		return acc;
	}, []);
}

export function differenceBy_3<T, U>(
	array1: T[],
	array2: T[],
	mapper: Mapper<T, U>
): T[] {
	const set2 = new Set(array2.map(mapper));
	return array1.filter((item) => !set2.has(mapper(item)));
}
