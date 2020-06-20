function newFile(name = []) {
    const separator = '>';
    const splitted = [...name].map(el => el.split(separator));
    const result = [];
    const mapping = {};

    for (let i = 0; i < splitted.length; i++) {
        mapping[splitted[i][0]] = splitted[i][1];
    }

    let first = Object.keys(mapping).find(k => !Object.values(mapping).find(v => v == k));

    while (result.length < name.length + 1) {
        result.push(first);
        first = mapping[first];
    }

    return result.join('');
}

const list = [ 'P>E', 'E>R', 'R>U'];
const list2 = ["I>N","A>I","P>A","S>P"];

console.log(newFile(list));
