function getSortedWord(word) {
    return word.split('').sort().join('');
}

function getAnagram(w='', list=[]) {
    const sortedWord = getSortedWord(w.toLowerCase());
    return list.filter(element => getSortedWord(element.toLowerCase()) === sortedWord);
}
