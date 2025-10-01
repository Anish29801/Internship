const { sum, isEven, fetchData, fetchPromise } = require("./sum");

// ✅ Basic test
test("adds two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});

// ✅ Truthy & Falsy
test("checks truthy and falsy values", () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
});

// ✅ Numbers
test("compares numbers", () => {
  expect(4 + 4).toBe(8);
  expect(10).toBeGreaterThan(5);
  expect(10).toBeGreaterThanOrEqual(10);
  expect(5).toBeLessThan(10);
  expect(0.1 + 0.2).toBeCloseTo(0.3); // floating point
});

// ✅ Strings
test("string matches", () => {
  expect("hello world").toMatch(/world/);
  expect("jest testing").toContain("jest");
});

// ✅ Arrays
test("array contains elements", () => {
  const fruits = ["apple", "banana", "mango"];
  expect(fruits).toContain("banana");
  expect(fruits).toEqual(expect.arrayContaining(["apple", "mango"]));
});

// ✅ Objects
test("object comparison", () => {
  const obj = { name: "Anish", role: "developer" };
  expect(obj).toEqual({ name: "Anish", role: "developer" });
  expect(obj).toMatchObject({ role: "developer" });
  expect(obj).toHaveProperty("name", "Anish");
});

// ✅ Boolean function
test("check even number", () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(5)).toBe(false);
});

// ✅ Exceptions
function throwError() {
  throw new Error("Something went wrong");
}
test("throws error", () => {
  expect(() => throwError()).toThrow("Something went wrong");
});

// ✅ Callbacks
test("fetchData with callback", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("data received");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

// ✅ Promises
test("fetchPromise resolves", () => {
  return expect(fetchPromise()).resolves.toBe("promise resolved");
});

// ✅ Async/Await
test("async/await example", async () => {
  const data = await fetchPromise();
  expect(data).toBe("promise resolved");
});

// ✅ Mock Functions
test("mock function example", () => {
  const mockFn = jest.fn((x) => x * 2);
  expect(mockFn(2)).toBe(4);
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith(2);
});

// ✅ Before / After Hooks
beforeAll(() => console.log("Runs once before all tests"));
afterAll(() => console.log("Runs once after all tests"));
beforeEach(() => console.log("Runs before each test"));
afterEach(() => console.log("Runs after each test"));

test("dummy test 1", () => {
  expect(1 + 1).toBe(2);
});
test("dummy test 2", () => {
  expect(2 + 2).toBe(4);
});
