// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

class Solution {
public:
    bool isBalanced(TreeNode* root) {    
        if(!root) return true;    
        int height;
        return isBalancedRec(root,height);
    }
    
    
    bool isBalancedRec(TreeNode* root, int &height) {        
       
        if(!root) {
           height = 0;
           return true;
       }
        
       int lh, rh;
        
       if(!isBalancedRec(root->left, lh))  {
           return false;
       }
        
       if(!isBalancedRec(root->right, rh)) {
           return false;
       }
        
       if(abs(lh-rh) > 1) {
           return false;
       }
        
       height = 1 + max(lh,rh); 
       return true;
    }
};
