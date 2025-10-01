// app.test.js
const { add, isEven, reverseString, fetchUser, riskyOperation } = require("./app");

//
// 🧪 Basic Math Tests
//
describe("Math Functions", () => {
  test("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test("checks even numbers", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(7)).toBe(false);
  });
});

//
// 🧪 String Tests
//
describe("String Functions", () => {
  test("reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("jest")).toBe("tsej");
  });
});

//
// 🧪 Async Tests
//
describe("Async Functions", () => {
  test("fetchUser returns correct data (Promise)", () => {
    return expect(fetchUser()).resolves.toEqual({ id: 1, name: "Anish" });
  });

  test("fetchUser with async/await", async () => {
    const user = await fetchUser();
    expect(user).toHaveProperty("name", "Anish");
  });
});

//
// 🧪 Error Handling Tests
//
describe("Error Handling", () => {
  test("throws error for negative values", () => {
    expect(() => riskyOperation(-5)).toThrow("Negative value not allowed");
  });

  test("does not throw for positive values", () => {
    expect(() => riskyOperation(10)).not.toThrow();
    expect(riskyOperation(10)).toBe(10);
  });
});
