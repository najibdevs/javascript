// Write a function that takes an array of integers and returns the maximum difference between any two elements in the array.

function findMaxDifference(arr) {
    if (arr.length < 2) {
        console.log("Array needs to have at least two elements to find a difference.");
        return 0; 
    }

    let minElement = arr[0]; 
    let maxDifference = arr[1] - arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        const currentDifference = arr[i] - minElement;
        maxDifference = Math.max(maxDifference, currentDifference);
        minElement = Math.min(minElement, arr[i]);
    }

    return maxDifference;
}


