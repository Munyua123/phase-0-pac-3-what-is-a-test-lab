require ( './root.js' );

const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Susan");
    });
  });

  describe("height", () => {
    it("is less than 74 and greater than 0", () => {
      expect(height).toBeMoreThan(0)
      expect(height).toBeLessThan(74)
    });
  });

  describe("message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
});
