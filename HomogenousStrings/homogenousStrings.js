/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    
    let result = 0;

    const getCounter = (w, index, prev, prevCounter) => {
        if (index >= w.length) return;

        if (w[index] === prev) {
            result = result + prevCounter * (prevCounter+ 1) / 2;
        } else {
            prevCounter = 1;
            result++;
        }

        return getCounter(w, index + 1, w[index], prevCounter + 1);
    }

    getCounter(s, 0, s[0], 1);

    return result;
};
