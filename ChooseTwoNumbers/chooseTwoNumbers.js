const FILLED = 1;

function generateDict(array) {
    let res = {};

    array.forEach(element => {
        if (res[element] === undefined) {
            res[element] = FILLED;
        }
    });

    return res;
}

function Validator() {
    var parameters = [...arguments];
    return {
        find: function(key) {
            parameters.forEach(element => {
                if (element[key] === FILLED) {
                    return true;
                }
            });
            return false;
        }
    }
}

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

console.log(chooseTwoNumbers([-1, 3, 5, 7], [7, 5, 3, 2])); 