// The purpose of this file it's to explain the implementation of the array methods:
// .forEach(), .map(), .some(), .every(), .filter()


// .forEach() function executes a function from the received callback function
Array.prototype.customForEach = function(callback) {
    if (typeof callback === typeof function(){}) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i]);
        }
    }
};

// Test output
const arrForEach = [1, 2, 3, 4, 5, 6];
arrForEach.forEach(e => console.log(e));
arrForEach.customForEach(e => console.log(e));

