/*   
   Project Title: Simple Command Line Calculator
   Requirements: Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.
   Mirza Umar Shabbir|PIAIC Batch 53, Islamabad
  */

import inquirer from "inquirer";
const input1 = await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: "Please enter first number: ",
  },
]);

const input2 = await inquirer.prompt([
  {
    name: "num2",
    type: "number",
    message: "Please enter second number: ",
  },
]);

const input3 = await inquirer.prompt([
  {
    name: "operation",
    type: "list",
    message: "Please choose desired operation",
    choices: ["+", "-", "*", "/"],
  },
]);

let firstNumber = input1.num1;
let secondNumber = input2.num2;
let operation = input3.operation;

let result: number;
function Calculation(
  firstNumber: number,
  secondNumber: number,
  operation: string
) {
  if (operation === "+") {
    result = firstNumber + secondNumber;
    return result;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
    return result;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
    return result;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
    return result;
  }
}

let finalResult = await Calculation(firstNumber, secondNumber, operation);

console.log("Your answer is " + finalResult);
