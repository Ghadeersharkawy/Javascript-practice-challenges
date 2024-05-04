// Code wars website

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOdd(num) {

//     if (num%2 ==0) {
//        return "Even";
//     } else {
//      return   "Odd";
//     }
// }

function evenOdd(num) {
    return num % 2 == 0 ? "Even" : "Odd";
}

console.log("4 is: ", evenOdd(4));
console.log("9 is: ", evenOdd(9));