//You get an array of numbers, return the sum of all of the positives ones.
// InitValue = 0

//[1, -3, 5, 9]

function sumOfPositives(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            sum += arr[i];
        } else {
            sum += 0;
        }
    }
    return sum;
}

console.log(sumOfPositives([1, -3, 5, 9]));
console.log(sumOfPositives([-1, -3, -5, -9]));