// Problem 7

//const doubleAge = (obj) => {};

export default doubleAge;

function doubleAge(obj) {
    const out = JSON.parse(obj);

    if (Object.keys(out).includes("age")) {
        out.age=(out.age*2);
    }
    else {
        out.age=0;
    }
    return out;
}