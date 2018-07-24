// Given an N by N matrix, rotate it by 90 degrees clockwise.

// For example, given the following matrix:

// [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]
// you should return:

// [[7, 4, 1],
// [8, 5, 2],
// [9, 6, 3]]
// Follow - up: What if you couldn't use any extra space?

/*
For each element in an array, the element index becomes the new array and the current
array index becomes the element's new index

set up blank new matrix with three blank arrays
set up two loops
    i for array
    j for element index
loop through index
    loop through each element in the index
    push matrix[i][j] to newMatrix[j][i]
return new matrix
*/


function clockWise(matrix) {
    var newMatrix = [
                    [],
                    [],
                    []
                    ];
    for ( var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
        }   
    }
    console.log(newMatrix);
    return newMatrix;
}

clockWise(
          [
            [1, 2, 3, 4],
            [5, 6, 7, 8], 
            [8, 9, 10, 11], 
            [12, 13, 14, 15]
          ]
        );