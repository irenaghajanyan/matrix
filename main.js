const print  = require("./matrix.js");
const mult = require("./util.js");

const matrix1 = [[8, 3], [2, 4], [3, 6]],
 	  matrix2 = [[1, 2, 3], [4, 6, 8]];
const result = mult.multiplyMatrices(matrix1, matrix2);
print.printMatrix(result);