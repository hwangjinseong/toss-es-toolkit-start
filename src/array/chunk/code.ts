// 코드 1
export function chunk_1<T>(array: T[], size: number): T[][] {
	let result: T[][] = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
}

// 코드 2
export function chunk_2<T>(array: T[], size: number): T[][] {
	return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
		array.slice(i * size, i * size + size)
	);
}

// 코드 3
export function chunk_3<T>(array: T[], size: number): T[][] {
	return array.reduce((result: T[][], item: T, index: number) => {
		const chunkIndex = Math.floor(index / size);

		if (!result[chunkIndex]) {
			result[chunkIndex] = [];
		}

		result[chunkIndex].push(item);

		return result;
	}, []);
}
