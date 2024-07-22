// //Reverse a String: Write a function that reverses a given string.
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// // Example usage
// let inputString = "Hello, World!";
// let reversedString = reverseString(inputString);
// console.log(reversedString);

//Count Characters:
//Create a function that counts the number of characters in a string.

// function countCharacters(inputString) {
//   return inputString.length;
// }

// const inputString = "Hello, world!";
// const characterCount = countCharacters(inputString);
// console.log(characterCount);

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1)
    
// }
// const Upper = "javascript"
// console.log(capitalizeFirstLetter(Upper));


// function findMaximum(arr) {
//     if (arr.length === 0) {
//         throw new Error("Array is empty");
//     }
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// function findMinimum(arr) {
//     if (arr.length === 0) {
//         throw new Error("Array is empty");
//     }
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// // Example usage:
// const numbers = [3, 5, 1, 9, 6, 8, 7, 2, 4];
// console.log("Maximum:", findMaximum(numbers)); // Output: Maximum: 9
// console.log("Minimum:", findMinimum(numbers)); // Output: Minimum: 1

//Sum of Array: Create a function that calculates the sum of all elements in an array.
// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// // Example usage:
// const numbers = [3, 5, 1, 9, 6, 8, 7, 2, 4];
// console.log("Sum of array:", sumOfArray(numbers)); // Output: Sum of array: 45


//Write a function to calculate the factorial of a given number.
// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers";
//     }
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// // Example usage:
// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1
// console.log(factorial(-3)); // Output: "Factorial is not defined for negative numbers"



//Prime Number Check: Create a function to check if a number is prime or not.
// function isPrime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     if (n <= 3) {
//         return true;
//     }
//     if (n % 2 === 0 || n % 3 === 0) {
//         return false;
//     }
//     for (let i = 5; i * i <= n; i += 6) {
//         if (n % i === 0 || n % (i + 2) === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Example usage:
// console.log(isPrime(5));  // Output: true
// console.log(isPrime(4));  // Output: false



//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )



function fibonacciSequence(n) {
    let sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return sequence;
}
console.log(fibonacciSequence(10));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

