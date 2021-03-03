(()=>{
    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {number}
     */
     // time O(n) space O(1)
    const maxDepth = function(root) {
        if (!root) 
            return 0;
        
        let max = 1
        
        function traverse(node, depth = 1) {
            if (!node) return;
            max = Math.max(max, depth);
            
            traverse(node.left, depth + 1);
            traverse(node.right, depth + 1);
        }
        
        traverse(root);
        return max;
    };

})();