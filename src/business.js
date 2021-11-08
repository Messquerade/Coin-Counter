export const makeChange = (money) => {
  if(isNaN(money)){
    return;
  }
  if (money < 0.01){
    return "";
  } else if (money >= .25){
    const quarters = Math.floor(money / .25);
    const notQuarters = quarters * .25;
    const qAmount = Math.round(notQuarters * 100) / 100;
    const newMoney = money - qAmount;
    return `The amount of quarters is ${quarters}`.concat(makeChange(Math.round(newMoney * 100)/ 100));
  } else if (money >= .10){
    const dimes = Math.floor(money / .10);
    const notDimes = dimes * .10;
    const dAmount = Math.round(notDimes * 100) / 100;
    const newerMoney = money - dAmount;
    return  `, the amount of dimes is ${dimes}`.concat(makeChange(Math.round(newerMoney * 100) / 100));
  } else if (money >= .05){
    const nickles = Math.floor(money / .05);
    const notNickles = nickles * .05;
    const nAmount = Math.round(notNickles * 100) / 100;
    const newererMoney = money - nAmount;
    console.log(newererMoney);
    return `, the amount of nickles is ${nickles}`.concat(makeChange(Math.round(newererMoney * 100) / 100));
  } else {
    const pennies = Math.floor(money / .01);
    const notPennies = pennies * .01;
    const pAmount = Math.round(notPennies * 100) / 100;
    const newerererMoney = money - pAmount;
    return  `, and the amount of pennies is ${pennies}`.concat(makeChange(Math.round(newerererMoney * 100) /100));
  }
}

// var discount = Math.round((100 - (price / listprice) * 100) * 100) / 100;
// Math.round(num * 100) / 100
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