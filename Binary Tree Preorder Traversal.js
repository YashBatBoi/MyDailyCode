var preorderTraversal = function(root) {
  if (!root) return [];
  
  const ans = [];
  
  const preorder = (root) => {
    if (!root) return;
    ans.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }
  
  preorder(root);
  
  return ans;
};
