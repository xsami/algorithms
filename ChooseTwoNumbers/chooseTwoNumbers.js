// For more information check this link:
// http://codeforces.com/problemset/problem/1206/A

const FILLED = 1;

/**
 * Generates a dictionary with the information in the array
 * received by parameter
 *
 * @param {*} array
 * @returns {Map with the element of the array as keys} 
 */
function generateDict(array) {
    const res = {};

    array.forEach(element => {
        res[element] = FILLED;
    });

    return res;
}
/**
 * Validates a key in a Map
 * 
 * @param {*} arguments that will be passed as a list
 * @returns {Object} public methods of this class.  
 */
function Validator() {
    var parameters = [...arguments];
    return {
        find: function(key) {
            return parameters.some(element => element[key] === FILLED);
        }
    };
}

/**
 * Finds if there are two numbers that added does not match
 * with any element of the two array
 *
 * @param {Array} A
 * @param {Array} B
 * @returns {Object} the numbers that can be added together
 */
function chooseTwoNumbers(A, B) {

    const myValidator = new Validator(generateDict(A), generateDict(B));

    for (let i = 0; i < A.length; i++) {
        const elementA = A[i];
        for (let j = 0; j < B.length; j++) {
            const elementB = B[j];
            const sum = elementA + elementB;
            
            if (!myValidator.find(sum)) {
                return { elementA, elementB };
            }
        }
    }

    return null;
}

// Section: Test Cases
console.log(chooseTwoNumbers([-1, 3, 5, 7], [7, 5, 3, 2])); 