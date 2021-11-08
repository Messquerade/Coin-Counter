export const makeChange = (money) => {
  if(isNaN(money)){
    return;
  }
  if (money < 0.01){
    return "";
  } else if (money >= .25){
    const quarters = Math.floor(money / .25);
    const qAmount = quarters * .25;
    return `The amount of quarters is ${quarters}`.concat(makeChange(money - qAmount));
  } else if (money >= .10){
    const dimes = Math.floor(money / .10);
    const dAmount = dimes * .10;
    console.log(money - dAmount);
    return  `, the amount of dimes is ${dimes}`.concat(makeChange(money - dAmount));
  } else if (money >= .05){
    const nickles = Math.floor(money / .05);
    const nAmount = nickles * .05;
    return `, the amount of nickles is ${nickles}`.concat(makeChange(money - nAmount));
  } else if (money >= .01){
    const pennies = Math.floor(money / .01);
    const pAmount = pennies * .01;
    return  `, the amount of pennies is ${pennies}`;
  }
}

// Expected: "The amount of quarters is 4, the amount of dimes is 1"
// Received: "The amount of quarters is 4the amount of dimes is 1,undefined"

// const incrementCounter = (counter) => {
//   // This is the termination condition.
//   if (isNaN(counter)) {
//     return;
//   }
//   if (counter >= 3) {
//     return counter;
//   } else {
//     console.log(counter);
//     return incrementCounter(counter + 1);
//   }
// }


// we start with a function that will take the money as a float as it's argument
// return the number of quarters, dimes, nickles, and pennies
// "The number of quarters is ${quarters}, the number of dimes is ${dimes}, the number of ${nickles}, and the number of pennies is ${pennies}."
// smallest number of change
// use recursion, return the function multiple times. Once for each type of change? Decreasing the total amount each time until we reach 0.00?

// So, if we were writing tests... the first test it should return if the argument is NaN (termination) return;
//  the base case, if the argument is 0.00, then return ?????
// each time we do the recursion, it will minus the amount of money in change from the original total until we reach zero?
// if()