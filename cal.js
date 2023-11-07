#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { sum } from "./functions.js";
import { difference } from "./functions.js";
import { multiplication } from "./functions.js";
import { division } from "./functions.js";
import showBanner from "node-banner";
import gradient from "gradient-string";
let answers = [
    {
        name: "num1",
        type: "number",
        message: gradient.rainbow("Enter your first number:"),
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter number:";
            }
            return true;
        }
    },
    {
        name: "num2",
        type: "number",
        message: gradient.rainbow("Enter your second number:"),
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter number:";
            }
            return true;
        }
    },
    {
        name: "operator",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: gradient.rainbow("Select operator:")
    }
];
let answer = [{
        name: "again",
        type: "confirm",
        message: "Do you want to calculate again",
    },
];
(async () => {
    await showBanner('Calculator', 'This calculator can perform addtion, subtraction,multiplication and division', "blue", "red");
})();
async function calculator() {
    let condition = true;
    while (condition) {
        let { num1, num2, operator } = await inquirer.prompt(answers);
        if (operator === "addition") {
            console.log(chalk.yellow(`The sum of two numbers = `, sum(num1, num2)));
        }
        else if (operator === "subtraction") {
            console.log(chalk.yellow(`The difference of two numbers = `, difference(num1, num2)));
        }
        else if (operator === "multiplication") {
            console.log(chalk.yellow(`The multiplication of two numbers = `, multiplication(num1, num2)));
        }
        else if (operator === "division") {
            console.log(chalk.yellow(`The division of two numbers = `, division(num1, num2)));
        }
        else {
            console.log(chalk.yellow("wrong input entered"));
        }
        ;
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
    ;
}
;
setTimeout(() => {
    calculator();
}, 1000);
