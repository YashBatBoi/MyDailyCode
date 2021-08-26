var maxProfit = function(prices) {
    var minPrice = Number.MAX_VALUE; //minPrice = 1.7976931348623157e+308
    var maxProf = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {  // in 1st iteration the prices[i] is less so will store the value in minPrice. 
            
            minPrice = prices[i];   // so now the minPrice has the value of prices[i].
            
        } else if (prices[i] - minPrice > maxProf) { // now this will check till last of array and find the maximum number.
            
            maxProf = prices[i] - minPrice;          // this will store the maximum number in maxProf. 
        }
    }
    return maxProf;   //whatever the maximum number is will return the number from the variable maxProf
};
