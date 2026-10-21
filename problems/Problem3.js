// Problem 3
//const multiplyBy = (arr, multiplier) => {};

export default multiplyBy;

function multiplyBy(arr, multiplier) {
    const out=[];
    for (var i = 0; i<arr.length; i++) {
        out[i]=multiplier * arr[i];
    } 
    return out;
}
