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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    const isSameTree = function(p, q) {

        let isSame = true;
        let compareQueue = [];

        //p and q are the two root nodes of the trees we want to compare
        function traverse(node, init=true){
            
            if ('undefined' == typeof(node))
                return;
            
            //add value to stack
            if (init)
                // build initial queue of values
                compareQueue.push(node ? node.val : null);
            else{
                //we are here to compare
                let current = compareQueue.shift();
                if ((node==null && current!==null) || (node && node.val != current)){
                    isSame = false;
                }
            }

            if (node !== null)
                traverse(node.left, init);
            if (node !== null)                
                traverse(node.right, init); 
        }

        traverse(p, true);
        traverse(q, false);
        return isSame;
    };

    const tree1 = {
        val:1,
        left: {
            val: 2
        }
    }

    const tree2 = {
        val:1,
        left: null,
        right: {
            val: 2
        }
    }

    console.log(isSameTree(tree1, tree2));

})();