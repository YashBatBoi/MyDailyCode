var convertToTitle = function(columnNumber) {
  let ans = "";
  
  while (columnNumber) {
    let result = columnNumber % 26;
    result = result || 26;
    
    ans = String.fromCharCode(64 + result) + ans; //this method 'String.fromCharCode' will convert the number into the ASCII value character & the 'ans' variable will concatenate with the value return from the method 'String.fromCharCode'.
      
    columnNumber = Math.floor(columnNumber / 26); // this will absolute the number and store in columnNumber variable again. 
      
    columnNumber = result === 26 ? columnNumber - 1 : columnNumber;   // this is ternary operator that check the condition 'result === 26' if it is 'truthy' then will return the first statement after the '?' else will return the statement after colon ':' 
  }
  
  return ans;
};
