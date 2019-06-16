function Person(id, trustList) {
    this.id = id;
    this.trusted = {};
    for (let i = 0; i < trustList.length; i++) {
        this.trusted[trustList[i]] = trustList[i];
    }
};

function trust(source, target) {
    return source.trusted[target.id] !== undefined;
}

const a = new Person('a', ['b', 'c', 'd']);
const b = new Person('b', ['a', 'd']);
const c = new Person('c', ['d']);
const d = new Person('d', []);

const citizens = [a, b, c, d];

// TODO: Make the getJudge function to solve who is the one that everybody trust
// Note the Judge is some who everybody trust but he doesn't trust in noone
function getJudge(citizens) {
    
    let cur = citizens[0];

    for (let i = 1; i < citizens.length; i++) {
        if (trust(cur, citizens[i])) {
            cur = citizens[i];
        }
    }

    for (let i = 0; i < citizens.length; i++) {
        if (!trust(citizens[i], cur) && citizens[i].id !== cur.id) {
            return "No Answer";
        }
    }

    return cur;
}


const result = getJudge(citizens);

console.log(result)