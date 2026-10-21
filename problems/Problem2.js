// Problem 2
//const largestMystery = (arr, mysteryFunc) => {};

export default largestMystery;

function largestMystery(arr,mysteryFunc) {
    /*
    var temp = Number.MIN_SAFE_INTEGER
    for (var i = 0; i<arr.length; i++) {
        if (mysteryFunc(arr[i]) && arr[i]>temp) {
            temp = arr[i];
        }
    }

    return temp!=Number.MIN_SAFE_INTEGER ? temp : "No number passes the function!";
    */

    return (Math.max(...(arr.filter((value) => mysteryFunc(value)))) != Number.NEGATIVE_INFINITY) ? Math.max(...(arr.filter((value) => mysteryFunc(value)))) : "No number passes the function!"

    
}
