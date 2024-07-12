import { compact } from "es-toolkit";

compact([0, 1, false, 2, "", 3, null, undefined, 4, NaN, 5]); // Returns: [1, 2, 3, 4, 5]
