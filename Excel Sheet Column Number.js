var titleToNumber = function(columnTitle) {
    let res = 0;
    
    for(let i = 0; i < columnTitle.length; i++) {
        res = res * 26;
        res = res + columnTitle[i].charCodeAt(0) - 64; //this method 'charCodeAt()' returns an integer between 0 and 65535 representing the UTF-16 code unit 
    }
    
    return res
};
