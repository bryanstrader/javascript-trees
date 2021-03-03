(() => {
    const tree = {
        "10": {
            value: "10",
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
            left: null,
            right: null,
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
    };


    const search = (tree = {}, root, num) => {

        // our search queue
        const queue = [];

        //root of search
        queue.push(tree[root]);

        //search the queue until it is empty
        while (queue.length > 0){
            //take first item in queue as current
            const currentNode = queue[0];

            //check if its the value you are looking for
            if (currentNode.value == num)
                return true;
            
            // see if there is a left child node to traverse
            if (currentNode.left !== null)
                queue.push(tree[currentNode.left]);

            // see if there is a right child node to traverse
            if (currentNode.right !== null)
                queue.push(tree[currentNode.right]);

            // remove the current first item in queue
            queue.shift();
        }

        // was not found in tree
        return false;
    };

    const result = search(tree, "10", "9");
    const result2 = search(tree, "10", "16");

    console.log(result);
    console.log(result2);
})();