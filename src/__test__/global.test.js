const text = "Hello world";
const fruits = ["apple", "orange", "banana"];

test("Contains banana?", () => {
    expect(fruits).toContain("banana");
});

test("Greater than", () => {
    expect(10).toBeGreaterThan(9);
});

test("True", () => {
    expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""));
};

test("Callback test", () => {
    reverseString("Hello", (str) => {
        expect(str).toBe("olleH");
    });
});
