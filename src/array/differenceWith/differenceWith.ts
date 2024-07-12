import { differenceWith } from "es-toolkit";

type Item = {
	id: number;
};

const array1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
const array2 = [{ id: 2 }, { id: 4 }];

const areItemsEqual = (a: Item, b: Item): boolean => a.id === b.id;
differenceWith(array1, array2, areItemsEqual);
// result는 [{ id: 1 }, { id: 3 }]가 돼요. id가 2인 요소들은 동일하다고 간주돼서 결과에서 제외돼요.
