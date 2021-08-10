var inorderTraversal = function(root) {
    var result = [];
    var stack = [];
    var current = root;
    
    while(current != null || stack.length){
          while(current != null){
            stack.push(current); 
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
};
