var getRow = function(rowIndex,pascal = []) {
    if(rowIndex == -1){
        return pascal
    }
    let newArray = new Array(pascal.length+1).fill(1);
    
    let i=1,j=0;
    while(i < newArray.length-1 && j < pascal.length-1){
        newArray[i] = pascal[j] + pascal[j+1];
        i++;
        j++;
    }
    return getRow(rowIndex-1,newArray)
};
