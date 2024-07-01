#! /usr/bin/env node

import inquirer from  "inquirer";

console.log("welcome to codewithMahnoor - CLI number guessing game");

const randomBNumber =Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "enter your guess number(number limit from 1 to 5):",
    },
]);

if(answer.userGuessedNumber === randomBNumber){
    console.log("congratulation ! you guess a correct number.")
}
else{
    console.log("sorry you guess a wrong number");
}