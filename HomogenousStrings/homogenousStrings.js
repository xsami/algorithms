// Solution for: https://leetcode.com/problems/count-number-of-homogenous-substrings/
/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    
    const getCounter = (w, index, prev, map) => {
        if (index >= w.length) return map;

        if (w[index] === prev[0]) {
            map[prev + w[index]] = (map[prev + w[index]] || 0) + 1;
            // TODO: Looping througth a huge amount of repeated charecters can
            // cause time limit for this algorithm O(n!) in some cases
            for (let i = 1; i <= prev.length; i++) {
                const subStr = prev.substr(0, i);
                map[subStr]++;
            }
            prev += w[index];
        } else {
            map[w[index]] = (map[w[index]] || 0) + 1;
            prev = w[index];
        }

        return getCounter(w, index + 1, prev, map);
    }

    return Object.values(getCounter(s, 0, '', {})).reduce((prev, act) => {
        return prev + act
    }, 0);
};
