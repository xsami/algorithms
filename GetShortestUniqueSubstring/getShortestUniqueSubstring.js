function getArrayAsObject(arr) {
    return arr.reduce((prev, act) => {
        return { [act]: false , ...prev };
    }, {});
}
function getShortestUniqueSubstring(arr, str) {
    let res = [];
    let arrayAsObj = getArrayAsObject(arr);
    let countDown = arr.length;
    for (let i = str.length - 1; i >= 0; i--) {
        if (countDown === 0) {
            break;
        }
        
        const currentChar = str[i];
        // if this value is already true. then reseat the countdown and continue 
        // the process to check the word
        if (arrayAsObj[currentChar]){
            countDown = arr.length; // reset countdown
            res = []; // reset res
            arrayAsObj = getArrayAsObject(arr); // reset array object
        }

        countDown--;
        res.push(currentChar);
        arrayAsObj[currentChar] = true;
    }
    return res.join('');
}

console.log(getShortestUniqueSubstring(['x', 'y', 'z'], 'xyyzyzyx'))
