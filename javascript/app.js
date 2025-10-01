// app.js

// Add two numbers
function add(a, b) {
  return a + b;
}

// Check if number is even
function isEven(num) {
  return num % 2 === 0;
}

// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Simulate async API call with Promise
function fetchUser() {
  return Promise.resolve({ id: 1, name: "Anish" });
}

// Throw error if invalid
function riskyOperation(x) {
  if (x < 0) throw new Error("Negative value not allowed");
  return x;
}

module.exports = { add, isEven, reverseString, fetchUser, riskyOperation };
