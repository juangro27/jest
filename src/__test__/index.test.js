const randomString = require("..");

describe("Testing randomString funtions", () => {
    test("testing external function", () => {
        expect(typeof randomString()).toBe("string");
    });
    test("Check if city doesn't exits", () => {
        expect(randomString()).not.toMatch(/Cordoba/);
    });
});
