
function sum(a, b) {
  return a + b;
}

function isEven(num) {
  return num % 2 === 0;
}

function fetchData(callback) {
  setTimeout(() => {
    callback("data received");
  }, 500);
}

function fetchPromise() {
  return Promise.resolve("promise resolved");
}

module.exports = { sum, isEven, fetchData, fetchPromise };
