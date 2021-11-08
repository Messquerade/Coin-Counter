import makeChange from "./../src/business";

describe('makeChange', () => {

  test('should return if parameter is not a number', () => {
    const result = makeChange("hi");
    expect(result).toEqual();
  });
});