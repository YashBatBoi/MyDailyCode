var sortedArrayToBST = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    return bst(nums, left, right);
};
function bst(nums, left, right) {
    if(left > right) {
        return null
    }
    let mid = (left + right) >> 1
    let node = new TreeNode(nums[mid]);
    
    node.left = bst(nums, left, mid - 1);
    node.right = bst(nums, mid + 1, right);
    return node
}
