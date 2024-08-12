// Question 11: Simple Calculator
// Task: Create a simple calculator that can perform addition, subtraction, multiplication, and division
// Functional Programming Approach:
// Write functions for each operation: add, subtract, multiply, and divide.
// Implement a function calculate that takes two numbers and an operation (as a string) and returns the result of the operation.
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
console.log(add(1, 3));
console.log(subtract(3, 5));
console.log(multiply(4, 5));
console.log(divide(27, 3));
//OOPSmethod
// Create a Calculator class with methods for each operation.Implement a method calculate in the 
//class that takes two numbers and an operation (as a string) and returns the result of the operation.
class Calculator {
    // Method for addition
    add(a, b) {
        return a + b;
    }
    // Method for subtraction
    subtract(a, b) {
        return a - b;
    }
    // Method for multiplication
    multiply(a, b) {
        return a * b;
    }
    // Method for division
    divide(a, b) {
        return a / b;
    }
}
console.log(add(1, 3)); //4
console.log(subtract(3, 5)); //-2
console.log(multiply(4, 5)); //20
console.log(divide(27, 3)); //9
//     // Method to perform the operation based on a string input
//     calculate(a: number, b: number, operation: string): number {
//         switch (operation) {
//             case 'add':
//                 return this.add(a, b);
//             case 'subtract':
//                 return this.subtract(a, b);
//             case 'multiply':
//                 return this.multiply(a, b);
//             case 'divide':
//                 return this.divide(a, b);
//            default
//         }
//     }
// }
// // Example usage:
// const calc = new Calculator();
// try {
//     console.log(calc.calculate(10, 5, 'add'));       // Output: 15
//     console.log(calc.calculate(10, 5, 'subtract'));  // Output: 5
//     console.log(calc.calculate(10, 5, 'multiply'));  // Output: 50
//     console.log(calc.calculate(10, 5, 'divide'));    // Output: 2
//     console.log(calc.calculate(10, 0, 'divide'));    // Throws Error: Cannot divide by zero
// }finally{
//     console.log("THE END");
//}
// Question 12: Separate Elements by TypeTask: Given an array with mixed types of
// elements, separate them into different arrays based on their type (number, string, boolean).
function separateElementsByType(arr) {
    const numbers = [];
    const strings = [];
    const booleans = [];
    // Loop through the array and push elements to the corresponding array based on type
    for (const element of arr) {
        if (typeof element === 'number') {
            numbers.push(element);
        }
        else if (typeof element === 'string') {
            strings.push(element);
        }
        else if (typeof element === 'boolean') {
            booleans.push(element);
        }
    }
    return {
        numbers,
        strings,
        booleans
    };
}
// Example usage:
const mixedArray = [1, 'hello', true, 42, 'world', false, 3.14];
const separated = separateElementsByType(mixedArray);
console.log('Numbers:', separated.numbers); // Output: Numbers: [1, 42, 3.14]
console.log('Strings:', separated.strings); // Output: Strings: ['hello', 'world']
console.log('Booleans:', separated.booleans); // Output: Booleans: [true, false]
export {};
