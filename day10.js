// Question 19: Implement a Basic Counter
// Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:
// increment(): void - Increments the counter by 1.
// decrement(): void - Decrements the counter by 1.
// getValue(): number - Returns the current value of the counter
class Counter {
    value;
    constructor(initialValue = 4) {
        this.value = initialValue;
    }
    // Method to increment the counter by 1
    increment() {
        this.value += 1;
    }
    // Method to decrement the counter by 1
    decrement() {
        this.value -= 1;
    }
    // Method to get the current value of the counter
    getValue() {
        return this.value;
    }
}
const counter = new Counter();
console.log(counter.getValue()); // Output: 0
counter.increment();
console.log(counter.getValue()); // Output: 1
counter.decrement();
console.log(counter.getValue()); // Output: 0
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2
export {};
