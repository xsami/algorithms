// Filenaming problem from: https://app.codesignal.com/challenge/ZDcqnTLrb2hiYfWmG

// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

// Example

// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

const mapping = {};

function MapElement(element) {
    if (mapping[element] !== undefined) {
        mapping[element]++;
    } else {
        mapping[element] = 0;
    }
}

function addOne(str) {
    const arr = str.split(/\(/);
    if (arr.length < 3) {
        return str
    }
    arr.pop();
    const lastElement = arr[arr.length - 1];
    arr[arr.length - 1] = `${ +(lastElement.substr(0, lastElement.length - 1)) + 1 })`
    const result = arr.join('(');
    MapElement(result);

    return result;
}

function getFileName(val, idx) {
    MapElement(val);
    const res = mapping[val] > 0 ? `${val}(${mapping[val]})`: val;
    return res === val ? idx === -1 ? addOne(val) : val : getFileName(res, -1);
}

function fileNaming(names) {
    return names.map(getFileName);
}
