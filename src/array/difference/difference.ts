import { difference } from "es-toolkit";

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4];
difference(array1, array2); // Output: [1, 3, 5]
// 2와 4는 두 배열 모두에 있기 때문에 결과에서 제외되고, result 변수에는 [1, 3, 5]가 할당되어요.
