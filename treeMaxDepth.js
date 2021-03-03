(() => {
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
    const diameterOfBinaryTree = function(root) {
        let diameter = 0;
        function helper(node){
            // if there is no node, we return
            if (node == null)
                return 0;

            let left = helper(node.left);
            let right = helper(node.right);
            diameter = Math.max(diameter, left + right);
            return Math.max(left, right) + 1;
        };

        helper(root);
        return diameter;
    };

})();