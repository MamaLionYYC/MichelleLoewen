// test.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Test cases
console.log("Add: ", add(2, 3)); // 5
console.log("Subtract: ", subtract(5, 2)); // 3
console.log("Multiply: ", multiply(3, 4)); // 12
console.log("Divide: ", divide(10, 2)); // 5