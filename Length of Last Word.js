var lengthOfLastWord = function(s) {
    let count = 0;
    
    // this will count from last word of string 
    for (var i = s.length - 1; i >= 0; i--) {
        
        // this if checks that if a space comes and count is not a zero so i will break this loop
        if (s[i] == " " && count != 0) {
            break;
        }
        
        // this if check that is string haven't reach to a space so it continues the count++ till find a space
        if(s[i] != " ") {
            count++;
        }
    }
    return count;
};
