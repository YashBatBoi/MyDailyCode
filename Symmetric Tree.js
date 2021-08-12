var isSymmetric = function(root) {
    return isTwoTreeSymmetric(root.left, root.right);
};

function isTwoTreeSymmetric(left, right) {
    if (left === null && right === null) {
        return true;
    }
    if (left === null || right === null || left.val !== right.val) {
        return false;
    }
    
    return true && isTwoTreeSymmetric(left.right, right.left) && isTwoTreeSymmetric(left.left, right.right);
}
