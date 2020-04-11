// Solution for problem: https://app.codesignal.com/challenge/dYHyPazDTukYyTN3o

// Given two binary strings a and b, add them together and return the resulting string.

// Example:

// For a = "1000" and b = "111", the output should be
// addBinaryStrings(a, b) = "1111";
// For a = "1" and b = "1", the output should be
// addBinaryStrings(a, b) = "10".

function getLastDigit(x) {
    return x.substr(x.length - 1);
}

function getCurrentDigit(a, b, m) {
    const ca = +(getLastDigit(a)),
          cb = +(getLastDigit(b)),
          cm = +(getLastDigit(m)),
          sum = ca + cb + cm;

    return (sum % 2) + '';
}

function getMod(a, b, m) {
    const ca = +(getLastDigit(a)),
          cb = +(getLastDigit(b)),
          cm = +(getLastDigit(m)),
          sum = ca + cb + cm;
    
    return sum < 2 ? '0' : '1';
}

function addBinaryStrings(a, b, mod = '0', res = []) {
    if (a.length < 1 && b.length < 1) {
        return mod == '0' ? res.reverse().join(''): [...res, mod].reverse().join('');
    }
    res.push(getCurrentDigit(a, b, mod));
    mod = getMod(a, b, mod);
    a = a.substr(0, a.length - 1);
    b = b.substr(0, b.length - 1);

    return addBinaryStrings(a, b, mod, res);
}
