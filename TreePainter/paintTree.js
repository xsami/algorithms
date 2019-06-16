function Tree(value, right=null, left=null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

let maxLvl = -1;

const getLevel = function(myTree, lvlCounter) {
    // return the level of the tree
    if (myTree.left != null) {
        getLevel(myTree.left, lvlCounter + 1);
    }
    if (lvlCounter > maxLvl) {
        maxLvl = lvlCounter;
    }
    if (myTree.right != null) {
        getLevel(myTree.right, lvlCounter + 1);
    }
}

const orderTraversal = function(myTree, output, currentLevel) {
    if (myTree.left != null) {
        orderTraversal(myTree.left, output, currentLevel + 1);
    }

    if (output[currentLevel] != undefined) {
        output[currentLevel].push(myTree.value);
    } else {
        output[currentLevel] = [myTree.value];
    }

    if (myTree.right != null) {
        orderTraversal(myTree.right, output, currentLevel + 1);
    }
}

const buildTree = function(myTree, minSpaceBt=2) {
    // console log the tree structure
    const output = [];
    getLevel(myTree, 0);
    orderTraversal(myTree, output, 0);

    // display the tree
    output.forEach((element, index) => {
        const spaces = minSpaceBt * (maxLvl - index + 1);
        element.unshift(" ".repeat(spaces));
        console.log(element.join(" ".repeat(spaces)));
    })
}


buildTree(
    {
        "value": 5,
        "left": {
            "value": 10,
            "left": {
                "value": 4,
                "left": {
                    "value": 1,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": 2,
                    "left": null,
                    "right": null
                }
            },
            "right": {
                "value": 6,
                "left": null,
                "right": {
                    "value": -1,
                    "left": null,
                    "right": null
                }
            }
        },
        "right": {
            "value": 7,
            "left": null,
            "right": null
        }
    }
)


console.log("\n\n\nNew Tree is comimg\n\n\n");
buildTree(
    {
        "value": 10,
        "left": {
            "value": 4,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 6,
            "left": null,
            "right": {
                "value": -1,
                "left": null,
                "right": null
            }
        }
    }
)