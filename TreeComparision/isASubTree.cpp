//
// Definition for binary tree:
// template<typename T>
// struct Tree {
//   Tree(const T &v) : value(v), left(nullptr), right(nullptr) {}
//   T value;
//   Tree *left;
//   Tree *right;
// };
// 
int treeTwoCounter = 0;
int traversalCounter = 0;

void twosTreeOrderTraverling(Tree<int> * first, Tree<int> * second, Tree<int> * keeper, int counter) {

    bool add = false;
    bool reset = false;
    if (second->left == nullptr) {
        add = true;
    }
    if (first->value != second->value) {
        reset = true;
    }

    if (first->left != nullptr) {
        if (first->value == second->value) {
            counter++;
        }
        // Check if the counter get the amount required to break this looping
        if (counter == treeTwoCounter) {
            traversalCounter = counter;
            return;
        }
        if (add) {
            twosTreeOrderTraverling(first, keeper, keeper, 0);
        }
        else if(add && reset) {
              twosTreeOrderTraverling(first->left, keeper, keeper, 0);  
        }
        else {
            twosTreeOrderTraverling(first->left, second->left, keeper, counter);
        }
        
    }
    if (first->right != nullptr) {
        if (first->value == second->value) {
            counter++;
        }
        // Check if the counter get the amount required to break this looping
        if (counter == treeTwoCounter) {
            traversalCounter = counter;
            return;
        }
        if (add) {
            twosTreeOrderTraverling(first, keeper, keeper, 0);
        }
        else if(add && reset) {
              twosTreeOrderTraverling(first->right, keeper, keeper, 0);  
        }
        else {
            twosTreeOrderTraverling(first->right, second->right, keeper, counter);
        }
        
    }
}


void getTreeNodes(Tree<int> * myTree) {
    if (myTree->left != nullptr) {
        getTreeNodes(myTree->left);
    }
    treeTwoCounter++;
    if (myTree->right != nullptr) {
        getTreeNodes(myTree->right);
    }
}

bool isSubtree(Tree<int> * first, Tree<int> * second) {
    int start = 0;
    auto copySecond = second;
    getTreeNodes(second);
    twosTreeOrderTraverling(first, second, copySecond, start);
    return treeTwoCounter == traversalCounter;
}
