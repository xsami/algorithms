function getSortedWord(word) {
    return word.split('').sort().join('');
}

function getAnagram(w='', list=[]) {
    const sortedWord = getSortedWord(w.toLowerCase());
    return list.filter(element => getSortedWord(element.toLowerCase()) === sortedWord);
}

console.log(getAnagram('horse', ['shore', 'esrho', 'dinner', 'abdop', 'roseh']));
console.log(getAnagram('podab', ['shore', 'esrho', 'dinner', 'abdop', 'roseh']));
console.log(getAnagram('bitch', ['shore', 'esrho', 'dinner', 'abdop', 'roseh']));
