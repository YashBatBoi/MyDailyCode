var minDepth = function(root) {
  if (!root) return 0;
  
  const minLeft = minDepth(root.left);
  const minRight = minDepth(root.right);
  
  if (!minLeft || !minRight) return 1 + Math.max(minLeft, minRight);
  
  return 1 + Math.min(minLeft, minRight);
};
