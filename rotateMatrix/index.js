const console = require("console");
// rotate matrix algorithm
function rotateMatrix(matrix) {
    const len = matrix.length;
    for (let i = 0; i < len - 1; i++) {
        // this algorithm only work for a matriz (N x N)
        for (let j = i; j < len - 1 - i; j++) {
            // Perform the rotation. there're must be 4 moves
            const first  = matrix[i][j];
            const second = matrix[j][len - 1 - i];
            const third  = matrix[len - 1 - i][len - 1 - j];
            const fourth = matrix[len - 1 - j][i];

            matrix[i][j] = fourth;
            matrix[j][len - 1 - i] = first;
            matrix[len - 1 - i][len - 1 - j] = second; 
            matrix[len - 1 - j][i] = third;
        }
    }
    return matrix;
}

const arr = [
    [ 1,  2,  3,  4,  5, 6],
    [ 7,  8,  9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];

// rotate result
const res = [ 
    [ 31, 25, 19, 13, 7,  1 ],
    [ 32, 26, 20, 14, 8,  2 ],
    [ 33, 27, 21, 15, 9,  3 ],
    [ 34, 28, 22, 16, 10, 4 ],
    [ 35, 29, 23, 17, 11, 5 ],
    [ 36, 30, 24, 18, 12, 6 ],
];


console.log(rotateMatrix(arr));
