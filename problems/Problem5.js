// Problem 5
//const uppercaseStringsContainingWaldo = (arr) => {};

export default uppercaseStringsContainingWaldo;

function uppercaseStringsContainingWaldo(arr) {
    const out=[]
    for (var i=0;i<arr["length"];i++) {
        if (arr[i].includes("waldo")) {
            out.push(arr[i].toUpperCase());
        }
    }
    return out;
    
}
