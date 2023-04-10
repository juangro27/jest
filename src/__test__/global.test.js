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

const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error("Error"));
        }
        resolve(str.split("").reverse().join(""));
    });
};

test("Promise test", () => {
    return reverseString2("Hello").then((str) => {
        expect(str).toBe("olleH");
    });
});

test("Async/Await test", async () => {
    const str = await reverseString2("Hello");
    expect(str).toBe("olleH");
});

// afterEach(() => console.log("After each test"));
// afterAll(() => console.log("After all tests"));

// beforeEach(() => console.log("Before each test"));
// beforeAll(() => console.log("Before all tests"));
