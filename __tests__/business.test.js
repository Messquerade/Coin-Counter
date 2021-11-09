import {makeChange} from "./../src/business";
import {makeChangeAgain} from "./../src/business";

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

  test('Should return the number of quarters, dimes and nickles', () => {
    const result = makeChange(1.15);
    expect(result).toEqual("The amount of quarters is 4, the amount of dimes is 1, the amount of nickles is 1");
  })
  
  test('should return the number of quarters, dimes, nickles, and pennies', () => {
    const result = makeChange(1.16);
    expect(result).toEqual("The amount of quarters is 4, the amount of dimes is 1, the amount of nickles is 1, and the amount of pennies is 1");
  })

  test('should return the number of just pennies', () => {
    const result = makeChange(.04);
    expect(result).toEqual(", and the amount of pennies is 4");
  })
});

describe('makeChangeAgain', () => {
  test('should return the number of quarters', () => {
    const result = makeChange(1.00);
    expect(result).toEqual("The amount of quarters is 4");
  })

  test('should return the number of quarters and dimes', () => {
    const result = makeChange(1.10);
    expect(result).toEqual("The amount of quarters is 4, the amount of dimes is 1")
  })

  test('should return the number of quarters, dimes, and nickles', () => {
    const result = makeChange(1.15);
    expect(result).toEqual("The amount of quarters is 4, the amount of dimes is 1, the amount of nickles is 1");
  })

  test('should return the number of quarters, dimes, nickles, and pennies', () => {
    const result = makeChange(1.16);
    expect (result).toEqual("The amount of quarters is 4, the amount of dimes is 1, the amount of nickles is 1, and the amount of pennies is 1");
  })
});