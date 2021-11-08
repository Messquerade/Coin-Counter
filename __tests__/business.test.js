import {makeChange} from "./../src/business";

describe('makeChange', () => {

  test('should return if parameter is not a number', () => {
    const result = makeChange("hi");
    expect(result).toEqual();
  });

  test('should return the number of quarters', () => {
    const result = makeChange(1.00);
    expect(result).toEqual("The amount of quarters is 4");
  })

  test('should return the number of quarters and dimes', () => {
    const result = makeChange(1.10);
    expect(result).toEqual("The amount of quarters is 4, the amount of dimes is 1")
  })
});