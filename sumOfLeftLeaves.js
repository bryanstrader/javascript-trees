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
    const sumOfLeftLeaves = function(root) {
        let sum = 0;

        if (root == null)
            return sum;

        function helper(node){
            if (!node)
                return;

            if (node.left && !node.left.left && !node.left.right)
                sum += node.left.val;

            helper(node.left);
            helper(node.right);
        }
        helper(root);
        return sum;
    };

})();