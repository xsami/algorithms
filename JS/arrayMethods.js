// The purpose of this file it's to explain the implementation of the array methods:
// .forEach(), .map(), .some(), .every(), .filter()


// .forEach() function executes a function from the received callback function
Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

// Test output
const arrForEach = [1, 2, 3, 4, 5, 6];
arrForEach.forEach(e => console.log(e));
arrForEach.customForEach(e => console.log(e));


// .some() function loop through the array and return false if any of the value doesnt meet
// the callback argument
Array.prototype.customSome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
};

// Test output
const arrSome = [1, 2, 3, 4, 5, 6];
console.log( arrSome.some(e => e % 2) );
console.log( arrSome.customSome(e => e % 2) );