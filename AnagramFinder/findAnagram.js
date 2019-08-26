function getCharAmount(w='') {
    const r = {};
    for (let  i = 0; i < w.length; i++) {
        if (r[w[i]] === undefined) {
            r[w[i]] = 1;
        } else {
            r[w[i]]++;
        }
    }
    return r;
}

function matchObj(original={}, toCompare={}) {
    for (let i in original) {
        if (original[i] !== toCompare[i]) {
            return false;
        }
    }
    return true;
}

function getAnagram(w='', list=[]) {

    const res = [];
    const c1 = getCharAmount(w);
    let c2 = [];

    list.filter((wl) => wl.length === w.length); // Just filter elements that the length are equal to w (original word)

    list.forEach((element) => {
        c2 = getCharAmount(element);

        if (matchObj(c1, c2)) {
            res.push(element);
        }
    });

    return res;
}

console.log(getAnagram('horse', ['shore', 'esrho', 'dinner', 'abdop', 'roseh']) );
console.log(getAnagram('podab', ['shore', 'esrho', 'dinner', 'abdop', 'roseh']));
console.log(getAnagram('bitch', ['shore', 'esrho', 'dinner', 'abdop', 'roseh']));