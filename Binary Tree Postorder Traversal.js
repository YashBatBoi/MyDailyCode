// Given the root of a binary tree, return the postorder traversal of its nodes' values.

var postorderTraversal = function(root) {
    if(!root?.val) return [];
    return [].concat(
        postorderTraversal(root.left),
        postorderTraversal(root.right),
        root.val
    );
};
