
// npm stuff:
// module.exports = {function} < put this in the other file
// npm init to create package.json
// npm install --save-dev jest
// can use npm test if package.json is updated
// or jest filename if you have jest globally installed
// 

let prefix = require("./filename");

test('Test some function', () => {
  expect(prefix.functionName(args)).toBe("expected result")
})

// expect(value).toBe(4);
// expect(value).toEqual(4);

// Truthiness
// expect(n).toBeNull();
// expect(n).toBeDefined();
// expect(n).not.toBeUndefined();
// expect(n).not.toBeTruthy();
// expect(n).toBeFalsy();

//Numbers
// expect(value).toBeGreaterThan(3);
// expect(value).toBeGreaterThanOrEqual(3.5);
// expect(value).toBeLessThan(5);
// expect(value).toBeLessThanOrEqual(4.5);

//Strings
// expect('Christoph').toMatch(/stop/);
// expect('Christoph').not.toMatch(/stop/);

//Arrays and iteration
// expect(shoppingList).toContain('milk');
// expect(new Set(shoppingList)).toContain('milk');

//Errors
// expect(() => compileAndroidCode()).toThrow();
// expect(() => compileAndroidCode()).toThrow(Error);



