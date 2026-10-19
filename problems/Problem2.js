// Problem 2
//const largestMystery = (arr, mysteryFunc) => {};

export default largestMystery;

function largestMystery(arr,mysteryFunc) {
    var temp = Number.MIN_SAFE_INTEGER
    for (var i = 0; i<arr["length"]; i++) {
        if (mysteryFunc(arr[i]) && arr[i]>temp) {
            temp = arr[i];
        }
    }
    if (temp != Number.MIN_SAFE_INTEGER) {
        return temp;
    }
    else {
        return "No number passes the function!";
    }
}
