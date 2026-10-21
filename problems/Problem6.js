// Problem 6
//const namesAndAges = (names, ages) => {};

export default namesAndAges;

function namesAndAges(names,ages) {
    const out = [];
    for (let i = 0; i<names.length; i++) {
        out[i]={name: names[i], age: ages[i]};
    }
    return out
}