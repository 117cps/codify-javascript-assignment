// Problem 4
//const indexAndConcat = (arr) => {};

export default indexAndConcat;

function indexAndConcat(arr) {
    const out=[]
    for (var i=0; i<arr.length;i++) {
        out[i]=`${i}`+arr[i];
    }
    return out
}