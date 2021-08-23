// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var generate = function(numRows) {
    let res = [];
    
    for (let i = 0; i < numRows; i++) {
        let arr = [];
        
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                arr[j] = 1;
            } else {
               arr[j] = res[i - 1][j -1] + res[i - 1][j];  
            }
        }
        
        res.push(arr);
    }
    
    return res;
};
