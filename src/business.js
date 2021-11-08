export default function makeChange(money) {
  if(isNaN(money)){
    return;
  }
  return money;
}



// we start with a function that will take the money as a float as it's argument
// return the number of quarters, dimes, nickles, and pennies
// "The number of quarters is ${quarters}, the number of dimes is ${dimes}, the number of ${nickles}, and the number of pennies is ${pennies}."
// smallest number of change
// use recursion, return the function multiple times. Once for each type of change? Decreasing the total amount each time until we reach 0.00?

// So, if we were writing tests... the first test it should return if the argument is NaN (termination) return;
//  the base case, if the argument is 0.00, then return ?????
// each time we do the recursion, it will minus the amount of money in change from the original total until we reach zero?
// if()