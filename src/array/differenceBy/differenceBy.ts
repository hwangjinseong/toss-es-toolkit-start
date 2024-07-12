import { differenceBy } from "es-toolkit";

const array1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const array2 = [{ id: 2 }, { id: 4 }];
const mapper = (item: { id: number }) => item.id;
differenceBy(array1, array2, mapper);
// result는 [{ id: 1 }, { id: 3 }, { id: 5 }]가 돼요. id가 2인 요소들은 두 배열 모두에 있어서 결과에서 제외돼요.
