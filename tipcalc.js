const bill = 275;


// Calculate the tip using a ternary operator
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;

// Calculate the total value (bill + tip)
const totalValue = bill + tip;

// Construct the string and log it to the console
const resultString = `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}.`;
console.log(resultString);

/* Write your code below. Good luck! 🙂 */

