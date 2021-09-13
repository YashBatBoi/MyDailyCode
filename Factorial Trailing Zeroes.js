// Given an integer n, return the number of trailing zeroes in n!.

var trailingZeroes = function(n) {
    let ans = 0;
    let powerOf = 5;
    
    while ((n / powerOf) > 0) {
        ans = Math.floor((n / powerOf)) + ans;
        powerOf *= 5; 
    }
    
    return ans;
};

// The above program gives how many zeros are there in n! (n factorial like:- 1 * 2 * 3 *......n)
// and we are doing that we are dividing n by 5 so we get that how many zeros are there in that paticular n
// we are running a loop that will divide the number by and and the 5 get multiply by 5 itself so we get the answer 
