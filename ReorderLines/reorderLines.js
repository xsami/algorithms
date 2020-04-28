function specialSort(a, b) {
    let aElement  = a.split(' ');
    let bElement = b.split(' ');
    const firstA = aElement.shift();
    const firstB = bElement.shift();

    if (aElement.join('') < bElement.join('')) return -1;
    if (aElement.join('') > bElement.join('')) return 1;

    return firstA < firstB ? -1 : 1;
}

function isWord(text) {
    const arrText = text.split(' ');
    return arrText.length > 1 ? arrText[1] >= 'A' ? true: false : true;
}

function isNumber(text) {
    return !isWord(text);
}

function reorderLines(_logFileSize, logLines) {
    const wordSorted = logLines.filter(isWord).sort(specialSort);
    const numberSorted = logLines.filter(isNumber).sort(specialSort);
    const result = [...wordSorted, ...numberSorted]
    return result;
}


