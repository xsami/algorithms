// Solution for problem: https://app.codesignal.com/challenge/dYHyPazDTukYyTN3o

function getLastDigit(x) {
    return x.substr(x.length - 1);
}

function stringSumLastDigit(...elements) {
    return [...elements].reduce((prev, curr) => +(getLastDigit(curr)) + prev, 0);
}

function getCurrentDigit(a, b, m) {
    const sum = stringSumLastDigit(a, b, m);
    return (sum % 2) + '';
}

function getMod(a, b, m) {
    const sum = stringSumLastDigit(a, b, m);
    return sum < 2 ? '0' : '1';
}

function addBinaryStrings(a, b, mod = '0', res = []) {
    if (a.length < 1 && b.length < 1) {
        return mod == '0' ? res.reverse().join(''): [...res, mod].reverse().join('');
    }
    res.push(getCurrentDigit(a, b, mod));
    mod = getMod(a, b, mod);
    // Reduce the strings by removing last element from its
    a = a.substr(0, a.length - 1);
    b = b.substr(0, b.length - 1);

    return addBinaryStrings(a, b, mod, res);
}
