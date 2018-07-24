// Given an array of elements, return the length 
// of the longest subarray where all its elements are distinct.

// For example, given the array[5, 1, 3, 5, 2, 3, 4, 1], 
// return 5 as the longest subarray of disctinct elements is[5, 2, 3, 4, 1].

var arr = [5, 1, 3, 5, 2, 3, 4, 1];


function disctinct(array) {
    let subArray = [];
    array.forEach(element => {
        if (!subArray.includes(element)) {
            subArray.push(element);
        }
    });
   return subArray.length;
}

disctinct(arr);