var isSameTree = function(p, q) {
    if (p == null && q == null) {return true;}
    
    if (p == null || q == null) {return false;}
    
    if (p.val != q.val) {return false;}
    
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

// This function will check that the tree has the same nodes with the same position. 
