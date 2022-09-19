function toCamelCase(str) {

    const isAlpha = letter => /[a-zA-Z]/.test(letter);
    const result = [];
    const text = str.trim().toLowerCase();

    result.push(text[0]);
    let shouldUpperCase = false;

    for (let i = 1; i <= text.length; i++) {
        const current = text[i];
        if (isAlpha(current)) {
            result.push(shouldUpperCase ? current.toUpperCase() : current);
            shouldUpperCase = false;
        } else {
            shouldUpperCase = true;
        }
    }

    return result.join('');
}

console.log(toCamelCase("my new-idEa*with+Love"))
console.log(toCamelCase("The big and brown bear"))
