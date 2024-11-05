// Solution for: https://leetcode.com/problems/simplify-path/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    const stack = path.split('/');
    const result = [];

    stack.forEach(p => {
        if (p == '..') {
            result.pop();
        }
        else if (p == '.' || p.startsWith('/') || p == '') {
            // do nothing
        } else {
            result.push(p)
        }
    });

    return "/" + result.filter(Boolean).join('/');
};
