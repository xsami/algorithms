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


// .every() function loop through the array and return false if any of the value doesnt meet
// the callback argument
Array.prototype.customEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
};

// Test output
const arrEvery = [1, 2, 3, 4, 5, 6];
console.log( arrEvery.every(e => e % 2) );
console.log( arrEvery.customEvery(e => e % 2) ); // this will return false


// .some() function tries to find is there's one element who meets the condition
// passed in the callback argument
Array.prototype.customSome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
};

// Test output
const arrSome = [1, 2, 3, 4, 5, 6];
console.log( arrSome.some(e => e % 2) );
console.log( arrSome.customSome(e => e % 2) ); // this will return true



// .map() function mutates the array with the function passed by parameter
Array.prototype.customMap = function(callback) {
    for (let i = 0; i < this.length; i++) {
        this[i] = callback(this[i], i, this);
    }
    return this;
};


// Test output
const arrMap = [1, 2, 3, 4, 5, 6];
console.log( arrMap.map(e => e * 2) );
console.log( arrMap.customMap(e => e / 2) );


// .filter() return an array with the values that matched the value from the callback
Array.prototype.customFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};

// Test output
const arrFilter = [1, 2, 3, 4, 5, 6];
console.log( arrFilter.filter(e => e % 2) );
console.log( arrFilter.customFilter(e => e % 2) );
