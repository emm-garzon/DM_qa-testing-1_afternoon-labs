const { returnTwo, greeting, add } = require("./functions");

describe("test all functions", () => {
  test("returnTwo test", () => {
    expect(returnTwo()).toBe(2);
  });

  test("greeting test", () => {
    expect(greeting("James")).toBe("Hello James.");
  });

  test("greeting test", () => {
    expect(greeting("Jill")).toBe("Hello Jill.");
  });

  test("addition test", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("addition test", () => {
    expect(add(5, 9)).toBe(14);
  });
});
