function hasRepetition(obj) {
    for (let e in obj) {
        if (e != '.' && obj[e] > 1) {
            return true;   
        }
    }
    return false;
}

// TODO: Given a 9x9 sudoku table you must validate that it can be completed 
// https://en.wikipedia.org/wiki/Sudoku
function sudoku2(grid) {
    let comp, element;
    for (let i = 0; i < grid.length; i++) {
        comp = {};
        for (let j = 0; j < grid[i].length; j++) {
            element = grid[i][j];
            if (comp[element] == undefined) {
                comp[element] = 1;
            } else {
                comp[element]++;
            }
        }
        if (hasRepetition(comp)) {
            return false;
        }
        comp = {};
        for (let j = 0; j < grid.length; j++) {
            element = grid[j][i];
            if (comp[element] == undefined) {
                comp[element] = 1;
            } else {
                comp[element]++;
            }
        }
        if (hasRepetition(comp)) {
            return false;
        }
    }
    
    // Check if 3 x 3 doesnt repeat
    for (let i = 0; i < grid.length; i+=3) {
        for (let j = 0; j < grid[i].length; j+=3) {
            comp = {};
            for (let k = i; k < (i+3); k++) {
                for (let z = j; z < (j+3); z++) {
                    element = grid[k][z];
                    if (comp[element] == undefined) {
                        comp[element] = 1;
                    } else {
                        comp[element]++;
                    }
                }
            }
            if (hasRepetition(comp)) {
                return false;
            }
        }
    }

    return true;
}
