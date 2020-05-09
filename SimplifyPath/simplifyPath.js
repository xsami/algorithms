// Simplify path problem: https://app.codesignal.com/interview-practice/task/aRwxhGcmvhf6vKPCp

function simplifyPath(path) {
    const elements = (path && path.split('/')) || '';
    const res = [];
    let current;
    for (let i = 0; i < elements.length; i++) {
        current = elements[i];
        if (current === '.' || !current.length) {
            continue;
        }
        if (current === '..') {
            res.pop();
        } else {
            res.push(current);
        }
    }
    return '/' + res.join('/')
}
