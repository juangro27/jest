const text = "Hello world";

test("Must contain a string", () => {
    expect(text).toMatch(/world/);
});
