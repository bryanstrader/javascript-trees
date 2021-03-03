(() => {
    const tree = {
        "7": {
            value: "7",
            left: "4",
            right: "17",
        },
        "4": {
            value: "4",
            left: "1",
            right: "9",
        },
        "17": {
            value: "17",
            left: "12",
            right: "18",
        },
        "1": {
            value: "1",
            left: null,
            right: null,
        },
        "9": {
            value: "9",
            left: "3",
            right: "6",
        },
        "12": {
            value: "12",
            left: null,
            right: null,
        },
        "18": {
            value: "18",
            left: null,
            right: null,
        },
        "3" : {
            value: "3",
            left: null,
            right: null
        },
        "6" : {
            value: "6",
            left: null,
            right: null
        }        
    };


    const search = (tree = {}, root, num) => {

        // our search queue
        const stack = [];

        //root of search
        stack.push(tree[root]);

        while (stack.length > 0){

            //take first item in queue as current
            const currentNode = stack.pop();

            //check if its the value you are looking for
            if (currentNode.value == num)
                return true;

            // check left child node, add to stack if available
            if (currentNode.left !== null)
                stack.push(tree[currentNode.left]);
            
            // check right child node, add to stack if available
            if (currentNode.right !== null)
                stack.push(tree[currentNode.right]);
        }

        // was not found in tree
        return false;
    };

    const result = search(tree, "7", "3");
    const result2 = search(tree, "7", "1");
    const result3 = search(tree, "7", "6");

    console.log(result);
    console.log(result2);
    console.log(result3);
})();