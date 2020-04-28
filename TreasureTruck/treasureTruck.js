function numberTreasureTruck(rows, column, grid) {
    let res = 0;
    for (let i = 0; i < rows; i++) {
        const curRow = grid[i];
        let counter = 0;
        for (let j = 0; j < column; j++) {
            const element = curRow[j];
            if (element == 0) {
                res = counter > 1 ? res + 1 : res;
                counter = 0;
            } else {
                counter++;
            }
        }
        res = counter > 1 ? res + 1 : res;
    }
    return res;
}